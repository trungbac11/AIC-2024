import os
from PIL import Image

root_folder = "D:/AIC/AIC_Data/AIC_Keyframes_transnet_web"

new_size = (640, 320)
def resize_images_in_folder(folder_path, new_size):
    for filename in os.listdir(folder_path):
        if filename.endswith(".webp"):
            image_path = os.path.join(folder_path, filename)
            with Image.open(image_path) as img:
                img_resized = img.resize(new_size)
                img_resized.save(image_path, "WEBP")
                print(f"{image_path}")

for i in range(1, 30):  
    folder_name = f"L09_V{str(i).zfill(3)}"  
    folder_path = os.path.join(root_folder, folder_name)
    
    if os.path.isdir(folder_path):
        resize_images_in_folder(folder_path, new_size)
