from flask.cli import FlaskGroup
# from sqlalchemy import or_,text


from project import app, db
from project.models import Brands,Categories,Products
# from project.load_data import nea_data, eb_data

import csv
import os

products_eb_csv_path = "./project/product_data/parsed_eb.csv"
products_nea_csv_path = "./project/product_data/parsed_nea.csv"


#productName,priceInEuros,productUrl,gender,productDetails,mainImageUrl,brandName,categoryName
with open(os.path.abspath(products_eb_csv_path), newline='') as eb_csv:
    reader = csv.DictReader(eb_csv, delimiter=',')
    eb_data = list(reader)  
    for i in range(len(eb_data)):
        eb_data[i] = dict(eb_data[i])
    eb_csv.close()


with open(os.path.abspath(products_nea_csv_path), newline='') as nea_csv:
    reader = csv.DictReader(nea_csv, delimiter=',')
    nea_data = list(reader)
    for i in range(len(nea_data)):
        nea_data[i] = dict(nea_data[i])
    nea_csv.close()

cli = FlaskGroup(app)


@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command("populate_db")
def populate_db():
    db.session.add(Brands("Electric Bazaar", "https://www.electric-bazaar.com/heritage"))
    db.session.add(Brands("Nea", "https://n-e-a.co.uk/"))

    # add categories to category
    categories_values = ["Hijab", "Gharara", "Kimono", "Dress"]
    for category in categories_values:
        db.session.add(Categories(category_name=category))


# productName,priceInEuros,productUrl,gender,productDetails,mainImageUrl,brandName,categoryName

    for p in eb_data:
        db.session.add(Products(
            product_name=p["productName"], 
            # price_in_euros=p["priceInEuros"], 
            price_in_euros=p["price"], 
            product_url=p["productUrl"], 
            gender=p["gender"], 
            product_detail=p["productDetails"], 
            main_image_url=p["mainImageUrl"], 
            size = p["size"],
            brand_name=p["brandName"], 
            category_name=p["categoryName"]
        ))

#productName,priceInEuros,productUrl,gender,productDetails,mainImageUrl,brandName,categoryName
    for p in nea_data:
        db.session.add(Products(
            product_name=p["productName"], 
            price_in_euros=p["price"], 
            # price_in_euros=p["priceInEuros"], 
            product_url=p["productUrl"], 
            gender=p["gender"], 
            product_detail=p["productDetails"], 
            main_image_url=p["mainImage"], 
            # main_image_url=p["mainImageUrl"], 
            size = p["size"],
            brand_name=p["brandName"], 
            category_name=p["categoryName"]
        ))
        
    db.session.commit()


if __name__ == "__main__":
    cli()
