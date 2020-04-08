from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_,text

app = Flask(__name__)
CORS(app)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


from project.models import Products, Categories, Brands
from project import db

def search(search_keyword):
    # NO SEARCHING BY PRICE!!
    s=text("'%"+search_keyword+"%'")
    res = Products.query.filter(or_(Products.product_name.like(s),
                            Products.gender.like(s),
                            Products.product_detail.like(s),
                            Products.brand_name.like(s),
                            Products.category_name.like(s)))
    dicts = []
    for r in res:
        # dicts.append(r.asDict())
        # convert prices to USD
        dicts.append(r.asDictPriceInUSD())

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
    # return searched_view.query.filter(searched_view.gender == filter_value)

def filter_by_price(res, max, min):
    """
    res should be the return value of search (a list of Products as dictionaries)
    """
    filtered_search = []
    for r in res:
        if r["PriceInEuros"] <= max and r["PriceInEuros"] >= min:
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
    # return searched_view.query.filter(searched_view.category_name == filter_value)

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


def category_size(res):
    """
    res should be the return value of search (a list of Products as dictionaries)
    returns dictionary with category_name as key, available size as value
    """
    categories = db.session.query(Categories.category_name)
    categories = list(categories)
    for i in range(len(categories)):
        categories[i] = categories[i][0]
    category_size = {}
    for category in categories:
        sizes =[]
        for row in res:
            if row['CategoryName'] == category:
                sizes.append(row['Size'])
        category_size[category] = set(sizes)
    
    # remove empty value
    category_size = {key:val for key, val in category_size.items() if val != set()}

    return category_size
  
## POST methods

@app.route("/query", methods=["POST"])
def query():
    if request.method == "POST":
        search_keyword = request.get_json()['data']
        res = search(search_keyword)
        return jsonify(res)

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

@app.route("/about-brands")
def about_brands():
    return render_template("index.html", aboutbrandstoken="--spicybrands--")