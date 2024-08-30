from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
app.config.from_object('app.config.Config')

# Initialize MongoDB
mongo = PyMongo(app)

# Enable CORS
CORS(app)

# Import routes after initializing app and mongo
from app.routes import init_routes
init_routes(app, mongo)
