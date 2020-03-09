from flask import Flask, jsonify
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Config)
# app.config.from_object("project.config.Config")
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from project import models


@app.route("/")
def hello_world():
    return jsonify(hello="everyone")
