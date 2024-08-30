# from flask import jsonify, request

# def init_routes(app, mongo):
#     @app.route("/api/search/doctors", methods=['GET'])
#     def search_doctors():
#         # Get the search parameter from the query string
#         search_query = request.args.get('query', '')

#         # Perform case-insensitive search using regex
#         doctors_data = mongo.db.Doctors.find({
#             "$or": [
#                 {"D_firstName": {"$regex": search_query, "$options": "i"}},
#                 {"D_lastName": {"$regex": search_query, "$options": "i"}},
#                 {"D_specialist": {"$regex": search_query, "$options": "i"}}
#             ]
#         })

#         # Convert the data to a list of dictionaries
#         result = []
#         for document in doctors_data:
#             document['_id'] = str(document['_id'])  # Convert ObjectId to string
#             result.append(document)

#         # Return the data as JSON
#         return jsonify(result)

from flask import jsonify, request
import base64

def init_routes(app, mongo):
    @app.route("/api/search/doctors", methods=['GET'])
    def search_doctors():
        # Get the search parameter from the query string
        search_query = request.args.get('query', '')

        # Perform case-insensitive search using regex
        doctors_data = mongo.db.Doctors.find({
            "$or": [
                {"D_firstName": {"$regex": search_query, "$options": "i"}},
                {"D_lastName": {"$regex": search_query, "$options": "i"}},
                {"D_specialist": {"$regex": search_query, "$options": "i"}}
            ]
        })

        # Convert the data to a list of dictionaries
        result = []
        for document in doctors_data:
            document['_id'] = str(document['_id'])  # Convert ObjectId to string

            # Convert binary image data to Base64
            if 'D_photo' in document and document['D_photo']:
                document['D_photo'] = base64.b64encode(document['D_photo']).decode('utf-8')

            result.append(document)

        # Return the data as JSON
        return jsonify(result)
