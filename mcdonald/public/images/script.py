import os
import requests
from bs4 import BeautifulSoup


URL = "https://www.mcdonalds.com/us/en-us/full-menu.html"

os.makedirs("mcdonalds_images", exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(URL, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

images = soup.find_all("img")

count = 0
for img in images:
    src = img.get("src")
    if src and "menu" in src:  
        img_url = src if src.startswith("http") else "https://www.mcdonalds.com" + src
        img_data = requests.get(img_url).content
        with open(f"mcdonalds_images/product_{count}.jpg", "wb") as f:
            f.write(img_data)
        count += 1
        if count >= 100: 
            break

print("Pobieranie zakończone!")
