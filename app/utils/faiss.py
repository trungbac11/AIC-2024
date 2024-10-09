import faiss
from clip.model import CLIP
from clip.clip import tokenize
import open_clip
import torch
import json
import numpy as np
from PIL import Image

class Myfaiss_1:
    def __init__(self, bin_file: str, id2img_fps, device, translater, task_ar_path, task_weight_path):
        self.index = self.load_bin_file(bin_file)
        self.id2img_fps = id2img_fps
        # print(self.id2img_fps)
        
        self.device = device
        self.translater = translater

        # Load CLIP model
        with open(task_ar_path, 'r') as f:
            model_info = json.load(f)

        self.model = CLIP(**model_info)

        checkpoint = torch.load(task_weight_path, map_location=device)
        sd = checkpoint["state_dict"]
        if next(iter(sd.items()))[0].startswith('module'):
            sd = {k[len('module.'):]: v for k, v in sd.items()}

        self.model.load_state_dict(sd, strict=False)
        self.model.eval()
        self.model.to(device)

    def load_bin_file(self, bin_file: str):
        return faiss.read_index(bin_file)

    def text_search(self, text, k):
        # if detect(text) == 'vi':
        #     text = self.translater(text)

        # encode text
        txt = tokenize([str(text)])[0].unsqueeze(0).to(self.device)
        with torch.no_grad():
            text_feature = self.model.encode_text(txt)
            text_feature = text_feature / text_feature.norm(dim=-1, keepdim=True)

        # searching
        scores, idx_image = self.index.search(text_feature.cpu().numpy(), k=k)
        idx_image = idx_image.flatten()
        # print(self.id2img_fps)
        # print(idx_image)
        
        # get id keyframe
        infos_query = list(map(self.id2img_fps.get, list(idx_image)))
        image_paths = [info for info in infos_query]
        return image_paths
    
class Myfaiss_2:
    def __init__(self, bin_file: str, id2img_fps, device, translater, clip_backbone, pretrained):
        self.index = self.load_bin_file(bin_file)
        self.id2img_fps = id2img_fps
        # print(self.id2img_fps)
        
        self.device = device
        self.translater = translater

        # load model
        self.model, _, _ = open_clip.create_model_and_transforms(clip_backbone, pretrained)
        
        self.model.eval()
        self.model.to(device)

    def load_bin_file(self, bin_file: str):
        return faiss.read_index(bin_file)

    def text_search(self, text, k):
        tokenizer = open_clip.get_tokenizer('ViT-L-16-SigLIP-384')
        # encode text
        txt = tokenizer([text]).to(self.device)
        text_feature = self.model.encode_text(txt)
        text_feature = text_feature / text_feature.norm(dim=-1, keepdim=True)
            
        # searching
        scores, idx_image = self.index.search(text_feature.cpu().detach().numpy(), k=k)
        idx_image = idx_image.flatten()
        # print(self.id2img_fps)
        # print(idx_image)
        
        # get id keyframe
        infos_query = list(map(self.id2img_fps.get, list(idx_image)))
        image_paths = [info for info in infos_query]
        return image_paths
    
    def advanced_search(self, query_text):
        query_split = query_text.strip().split('.')

        # Remove empty strings from query_split
        # query_split = [sentence.strip() for sentence in query_split if sentence.strip()]
        text_features = torch.zeros((1, 1024), dtype=torch.float32).to(self.device)
        index_list = []

        tokenizer = open_clip.get_tokenizer('ViT-L-16-SigLIP-384')
        for text in query_split:
            text_tokenized = tokenizer([text]).to(self.device)
            with torch.no_grad():
                features = self.model.encode_text(text_tokenized)
                features = features / features.norm(dim=-1, keepdim=True)
                features = features.cpu().detach().numpy()
            
            # Nearest neighbor search for each sentence
            D, I = self.index.search(features, 500)
            index_list.extend(I[0, :])

        # Process and group indices
        index_list.sort()
        unique_index_list = sorted(set(index_list))

        l = []
        i = 0
        consecutive_threshold = 6
        min_consecutive_count = len(query_split) * 3

        while i < len(unique_index_list):
            count = 1
            while (i + count < len(unique_index_list) and
                unique_index_list[i + count] - unique_index_list[i + count - 1] <= consecutive_threshold):
                count += 1

            if count >= min_consecutive_count:
                l.append(unique_index_list[i:i + count])

            i += count

        ebedd = []
        for scene in l:
            vector = np.zeros((1, self.index.d))
            for frame in scene:
                vector += self.index.reconstruct(int(frame))
            vector /= len(scene)
            vector /= np.linalg.norm(vector)
            ebedd.append(vector)

        ebedd = np.vstack(ebedd)

        text_tokenized = tokenizer([query_text]).to(self.device)
        text_features = self.model.encode_text(text_tokenized)
        text_features = text_features / text_features.norm(dim=-1, keepdim=True)
        text_features = text_features.cpu().detach().numpy()

        new_index = faiss.IndexFlatIP(ebedd.shape[1])
        new_index.add(ebedd)
        k=len(l)
        D, I = new_index.search(text_features, k)
        
        # print(I.flatten())
        # print(l)
        image_paths = []
        for scene_idx in I.flatten():
            scene = l[scene_idx]
            for frame_id in scene:
                image_path = self.id2img_fps.get(frame_id)
                if image_path is not None:
                    image_paths.append(image_path)

        return image_paths
    
    def compress_image(self, image_path):
        try:
            image = Image.open(image_path)
            webp_path = image_path.replace(".jpg", ".webp")
            image.save(webp_path, "webp")
            return webp_path
        except Exception as e:
            print(f"Error compressing image {image_path}: {e}")
            return image_path 

