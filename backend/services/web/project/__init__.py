from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

################### don't touch this #######################################
app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)
from project import models
################### no moving/removing anything above this line ############

@app.route("/")
def home():
    return render_template("index.html", hometoken="--welcomehome--")


@app.route("/results")
def results():
    return render_template("index.html", resultstoken="--spicyresults--")


@app.route("/how-it-works")
def how_it_works():
    return render_template("index.html", howitworkstoken="--meggy--")
