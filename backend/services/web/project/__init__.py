from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)

from project import models


@app.route("/")
def hello_world():
    return jsonify(hello="everyone")
