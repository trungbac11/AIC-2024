<div align="center"> 
  
  # Event Retrieval from Video - AICHCM 2024 
</div>

## System pipline
![image](https://github.com/user-attachments/assets/e27bab98-9dc0-4a02-a463-23b9e7183385)

## Usage
### Data preparation

- Download [data_1](https://www.kaggle.com/datasets/kinhnguynvn/aic-keyframes-batch1) and [data_2](https://www.kaggle.com/datasets/kinhnguynvn/aic-keyframes-batch2): we have applied various image compression methods.
- Create [models](https://drive.google.com/drive/folders/1dWkCC7IQIqdkwKWXg1GYrhi1OJ1buZcl) folder: have object, bins file and path to image.

### Setup 

```bash
python -m venv myenv 
.\myenv\Scripts\activate 
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
```
### Run
```bash
.\myenv\Scripts\activate
cd app
uvicorn main:app --reload
```
### Demo
Run this URL in your browser: `http://127.0.0.1:5500/app/index.html`

![image](https://github.com/user-attachments/assets/3533350b-9c7d-4e01-adb4-7e9dab32e9b2)


