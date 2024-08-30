from pymongo import MongoClient
from bson import Binary

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['CMS']
collection = db['Doctors']

# Open the image file
with open('D:/Code Lab/React/CMS/client/public/user1.jpg', 'rb') as image_file:
    binary_data = Binary(image_file.read())

# Update the document with the image data
collection.update_one(
    {"D_Id": "D-102"},  # Replace with your specific query
    {"$set": {"D_photo": binary_data}}
)
