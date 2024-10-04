import json
import glob

# Đường dẫn cơ sở đến các thư mục Keyframes
base_path = "D:/AIC/AIC_Data/AIC_Keyframes"

# Đường dẫn tệp JSON sẽ được lưu
json_file_path = "full_path.json"

# Danh sách để lưu tất cả các đường dẫn tệp JPG
all_path_list = []

# Tìm các thư mục con trong thư mục keyframes (ví dụ: L02_V001)
video_dirs = sorted(glob.glob(f"{base_path}/*"))

for video_dir in video_dirs:
    # Tìm tất cả các tệp JPG trong mỗi thư mục video
    jpg_files = sorted(glob.glob(f"{video_dir}/*.jpg"))
    jpg_files = [path.replace("\\", "/") for path in jpg_files]
    all_path_list += jpg_files

# Tạo một danh sách chỉ số và một dictionary để ánh xạ chỉ số tới đường dẫn tệp
idx_list = list(range(len(all_path_list)))
path_dict = dict(zip(idx_list, all_path_list))

# Lưu dictionary vào tệp JSON
with open(json_file_path, "w") as json_file:
    json.dump(path_dict, json_file)
