from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_,text

app = Flask(__name__)
CORS(app)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


from project.models import Products

def search(search_keyword):
    # NO SEARCHING BY PRICE!!
    s=text("'%"+search_keyword+"%'")
    res = Products.query.filter(or_(Products.ProductName.like(s),
                            Products.Gender.like(s),
                            Products.ProductDetail.like(s),
                            Products.BrandName.like(s),
                            Products.CategoryName.like(s)))
    dicts = []
    for r in res:
        dicts.append(r.asDict())

    return dicts

def filter_by_gender(res, gender):
    """
    res should be the return value of search (a list of Products as dictionaries)
    gender must be F, M or U (uppercase only for now!)
    """
    filtered_search = []
    for r in res:
        if r["Gender"] == gender:
            filtered_search.append(r)
    return filtered_search
    # return searched_view.query.filter(searched_view.Gender == filter_value)

def filter_by_price(res, max, min):
    """
    res should be the return value of search (a list of Products as dictionaries)
    """
    filtered_search = []
    for r in res:
        if r["PriceInEuros"] <= max and r.PriceInEuros >= min:
            filtered_search.append(r)
    return filtered_search
    # return searched_view.query.filter(searched_view.PriceInEuros == filter_value)

def filter_by_category(res, category):
    """
    res should be the return value of search (a list of Products as dictionaries)
    """
    filtered_search = []
    for r in res:
        if r["CategoryName"] == category:
            filtered_search.append(r)
    return filtered_search
    # return searched_view.query.filter(searched_view.CategoryName == filter_value)

def sort_by_price_ascending(res):
    """
    res should be the return value of search (a list of Products as dictionaries)
    returns res as a sorted list of dicts by ascending by price
    """
    return sorted(res, key = lambda i: i["PriceInEuros"])

def sort_by_price_descending(res):
    """
    res should be the return value of search (a list of Products as dictionaries)
    returns res as a sorted list of dicts by descending by price
    """
    return sorted(res, key = lambda i: i["PriceInEuros"], reverse=True)


## POST methods

@app.route("/query", methods=["POST"])
def query():
    print("your searched...", request.data.decode('utf-8'))
    return "thanks"

### routes
@app.route("/")
def home():
    # see these results in docker-compose logs -f
    # should show up if you go to localhost:5000
    # print("testing search: love")
    # print(search("love"))
    return render_template("index.html", hometoken="--welcomehome--")


@app.route("/results")
def results():
    return render_template("index.html", resultstoken="--spicyresults--")


@app.route("/how-it-works")
def how_it_works():
    return render_template("index.html", howitworkstoken="--meggy--")

