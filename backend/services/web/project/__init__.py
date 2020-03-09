from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, email):
        self.email = email


@app.route("/")
def home():
    return render_template("index.html", yummytoken="smit was here")


@app.route("/results")
def results():
    return render_template("index.html", yummytoken2="smit was here 2")


@app.route("/how-it-works")
def how_it_works():
    return render_template("index.html", yummytoken3="smit was here 3")


@app.route("/testing")
def testing():
    return render_template("index.html", yummytoken="stella was here")
