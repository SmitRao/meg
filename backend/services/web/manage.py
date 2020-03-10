from flask.cli import FlaskGroup
from sqlalchemy import or_,text


from project import app, db
from project.models import Brands,Categories,Products
# from project.load_data import nea_data, eb_data

import csv
import os

products_eb_csv_path = "./project/product_data/parsed_eb.csv"
products_nea_csv_path = "./project/product_data/parsed_nea.csv"

with open(os.path.abspath(products_eb_csv_path), newline='') as eb_csv:
    reader = csv.reader(eb_csv)
    eb_data = list(reader)
    eb_data = eb_data[1:] #drop header row
    eb_csv.close()

with open(os.path.abspath(products_nea_csv_path), newline='') as nea_csv:
    reader = csv.reader(nea_csv)
    nea_data = list(reader)
    nea_data = nea_data[1:] #drop header row
    nea_csv.close()


cli = FlaskGroup(app)


@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command("populate_db")
def populate_db():
    db.session.add(Brands(BrandName="Electric Bazaar", BrandUrl="https://www.electric-bazaar.com/heritage"))
    db.session.add(Brands(BrandName="Nea", BrandUrl="https://n-e-a.co.uk/"))

    # add categories to category
    categories_values = ["Hijab", "Gharara", "Kimono", "Dress"]
    for category in categories_values:
        db.session.add(Categories(CategoryName=category))

    # add eb products to products
    # productName,priceInEuros,productUrl,gender,productDetails,mainImageUrl,brandName,categoryName
    for p in eb_data:
        db.session.add(Products(
            ProductName=p[0], 
            PriceInEuros=p[1], 
            ProductUrl=p[2], 
            Gender=p[3], 
            ProductDetail=p[4], 
            MainImageUrl=p[5], 
            BrandName=p[6], 
            CategoryName=p[7]
        ))

    # productName,priceInEuros,productUrl,gender,productDetails,mainImage,brandName,categoryName
    for p in nea_data:
        db.session.add(Products(
            ProductName=p[0], 
            PriceInEuros=p[1], 
            ProductUrl=p[2], 
            Gender=p[3], 
            ProductDetail=p[4], 
            MainImageUrl=p[5], 
            BrandName=p[6], 
            CategoryName=p[7]
        ))
    
    db.session.commit()

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

if __name__ == "__main__":
    cli()
