from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_,text


app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


from project.models import Products

def search(search_keyword):
    # NO SEARCHING BY PRICE
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
    """
    return sorted(res, key = lambda i: i["PriceInEuros"])

def sort_by_price_descending(res):
    """
    res should be the return value of search (a list of Products as dictionaries)
    """
    return sorted(res, key = lambda i: i["PriceInEuros"], reverse=True)

# if db:
#     print(search("love"))

@app.route("/")
def home():
    print("testing search: love")
    print(search("love"))
    return render_template("index.html", yummytoken="smit was here")


@app.route("/results")
def results():
    return render_template("index.html", yummytoken2="smit was here 2")


@app.route("/how-it-works")
def how_it_works():
    return render_template("index.html", yummytoken3="smit was here 3")
