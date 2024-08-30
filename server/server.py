from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

# Create Flask app instance
app = Flask(__name__)

# Configure MongoDB connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/CMS/Doctors"
mongo = PyMongo(app)

# Enable CORS
CORS(app)

# Define a route to return filtered data from Authenticate collection
@app.route("/api/search", methods=['GET'])
def search_doctors():
    search_query = request.args.get('query', '')
    doctor_type = request.args.get('type', '')

    # Perform case-insensitive search using regex
    search_criteria = {
        "$or": [
            {"D_firstName": {"$regex": search_query, "$options": "i"}},
            {"D_lastName": {"$regex": search_query, "$options": "i"}}
        ]
    }
    
    if doctor_type:
        search_criteria["D_specialist"] = {"$regex": doctor_type, "$options": "i"}

    # Query the Doctors collection
    doctors_data = mongo.db.Doctors.find(search_criteria)

    # Convert the data to a list of dictionaries
    result = []
    for document in doctors_data:
        document['_id'] = str(document['_id'])  # Convert ObjectId to string
        result.append({
            "D_Id": document.get("D_Id"),
            "D_firstName": document.get("D_firstName"),
            "D_lastName": document.get("D_lastName"),
            "D_specialist": document.get("D_specialist"),
            "D_email": document.get("D_email"),
            "D_phone": document.get("D_phone")
        })

    # Return the data as JSON
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=8080)

# @app.route("/api/home", methods=['GET'])
# def return_home():
#     return jsonify(
#         {'message': "Knock"
         
#          }
#     )


# if __name__ == "__main__":
#     app.run(debug=True, port=8080)
