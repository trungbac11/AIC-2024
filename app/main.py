from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from utils.faiss import Myfaiss_1, Myfaiss_2
from utils.translate import Translation
from utils.object_detect import Object_Detection
from pydantic import BaseModel
import os
import json
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


class QueryModel(BaseModel):
    query: str
    model: str

class ObjectRequestModel(BaseModel):
    objects: list
    
# image path
json_path = 'D:/AIC/models/full_path.json'

# object detect
json_object = 'D:/AIC/object_detection/classes.json'
mapping_path = 'D:/AIC/object_detection/mapping.json'
vector_object = "D:/AIC/object_detection/vector_classesObject.npy"

# model clip
bin_file_1 = 'D:/AIC/test_1/keyframe_index11.bin'
bin_file_2 = 'D:/AIC/models/keyframe_index.bin'

# Load JSON dictionary
with open(json_path) as f:
    json_dict = json.load(f)

with open(json_object) as f:
    json_obj = json.load(f)

with open(mapping_path) as f:
    json_mapping = json.load(f)
    
vector_classes = np.load(vector_object)

ObjectPath = {int(key): value for key, value in json_mapping.items()}
DictImagePath = {int(key): value for key, value in json_dict.items()}
MAX_ID = len(DictImagePath)

translater = Translation(from_lang='vi', to_lang='en')
MyFaiss_v1 = Myfaiss_1(bin_file_1, DictImagePath, 'cpu', Translation(), task_ar_path = './../models/ViT-B-16.json', task_weight_path='./../models/tsbir_model_final.pt')
MyFaiss_v2 = Myfaiss_2(bin_file_2, DictImagePath, 'cpu', Translation(), "ViT-L-16-SigLIP-384", 'webli')
Object = Object_Detection()
   
@app.post("/search_images/")
async def search_images(query_model: QueryModel):
    try:
        query = query_model.query
        selected_model = query_model.model
        
        query_translate = translater(query)
        query_translate = query_translate.rstrip('.')
        print(query_translate)
        
        if selected_model == 'model1':
            image_paths = MyFaiss_v2.text_search(query_translate, 108)
        else:
            image_paths = MyFaiss_v2.advanced_search(query_translate)

        if not image_paths:
            raise HTTPException(status_code=404, detail="No images found for the given query.")
        
        image_data = []
        for path in image_paths:
            image_name = os.path.basename(path)
            folder_name = os.path.basename(os.path.dirname(path))
            
            # print(image_name)
            # print(frame_idx)
            image_url = f"http://127.0.0.1:8000/image/{folder_name}/{image_name}"
            image_data.append({
                "image_url": image_url,
                "image_name": image_name,
                "folder_name": folder_name,
            })

        # Return image data as a JSON response
        return JSONResponse(content={"images": image_data})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.post("/send_objects/")
async def send_objects(request: ObjectRequestModel):
    try:
        objects = request.objects
        classes = json_obj['classes']
        # print(classes)
        # print(objects)
        # print(vector_classes)

        image_paths = Object.object_search(classes, objects, vector_classes, ObjectPath, DictImagePath)
        # print (a)
        
        image_data = []
        for path in image_paths:
            image_name = os.path.basename(path)
            folder_name = os.path.basename(os.path.dirname(path))
            
            # print(image_name)
            # print(frame_idx)
            image_url = f"http://127.0.0.1:8000/image/{folder_name}/{image_name}"
            image_data.append({
                "image_url": image_url,
                "image_name": image_name,
                "folder_name": folder_name,
            })

        # Return image data as a JSON response
        return JSONResponse(content={"images": image_data})
        # return JSONResponse(content={"message": "Objects received successfully", "objects": objects})
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/surrounding_images/{folder_name}/{image_name}")
async def get_surrounding_images(folder_name: str, image_name: str):
    try:
        current_index = next(
            (index for index, path in DictImagePath.items()
             if os.path.basename(path) == image_name and os.path.basename(os.path.dirname(path)) == folder_name),
            None
        )
        
        if current_index is None:
            raise HTTPException(status_code=404, detail="Image not found.")

        # Lấy 25 ảnh trước và 25 ảnh sau
        start_index = max(0, current_index - 25)
        end_index = min(MAX_ID, current_index + 25)

        image_paths = [DictImagePath[i] for i in range(start_index, end_index)]

        image_data = []
        for i, path in enumerate(image_paths):
            image_name = os.path.basename(path)
            folder_name = os.path.basename(os.path.dirname(path))
            image_url = f"http://127.0.0.1:8000/image/{folder_name}/{image_name}"
            image_data.append({
                "image_url": image_url,
                "image_name": image_name,
                "folder_name": folder_name
            })

        return JSONResponse(content={"images": image_data})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/image/{folder_name}/{image_name}")
async def get_image(folder_name: str, image_name: str):
    image_path = next(
        (
            path for path in DictImagePath.values() 
            if os.path.basename(path) == image_name and os.path.basename(os.path.dirname(path)) == folder_name
        ),
        None
    )
    
    if not image_path or not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found.")

    return FileResponse(image_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
