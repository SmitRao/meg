from flask.cli import FlaskGroup
# from sqlalchemy import or_,text


from project import app, db
from project.models import Brands,Categories,Products
# from project.load_data import nea_data, eb_data

import csv
import os

products_eb_csv_path = "./project/product_data/parsed_eb.csv"
products_nea_csv_path = "./project/product_data/parsed_nea.csv"
products_eb_kuchi_csv_path = "./project/product_data/parsed_eb_kuchi.csv"


#productName,price,currency,productUrl,gender,productDetails,mainImage,brandName,categoryName
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

with open(os.path.abspath(products_eb_kuchi_csv_path), newline='') as eb_kuchi_csv:
    reader = csv.DictReader(eb_kuchi_csv, delimiter=',')
    kuchi_data = list(reader)
    for i in range(len(kuchi_data)):
        kuchi_data[i] = dict(kuchi_data[i])
    eb_kuchi_csv.close()

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
    categories_values = ["Hijab", "Gharara", "Kimono", "Dress", "Kaftan"]
    for category in categories_values:
        db.session.add(Categories(category_name=category))


# productName,price,currency,productUrl,gender,productDetails,mainImage,brandName,categoryName

    for p in eb_data:
        db.session.add(Products(
            product_name=p["productName"], 
            price=p["price"],
            currency=p["currency"],
            product_url=p["productUrl"], 
            gender=p["gender"], 
            product_detail=p["productDetails"], 
            main_image_url=p["mainImageUrl"], 
            size = p["size"],
            brand_name=p["brandName"], 
            category_name=p["categoryName"]
        ))

#productName,price,currency,productUrl,gender,productDetails,mainImageUrl,brandName,categoryName
    for p in nea_data:
        db.session.add(Products(
            product_name=p["productName"], 
            price=p["price"],
            currency=p["currency"],
            product_url=p["productUrl"], 
            gender=p["gender"], 
            product_detail=p["productDetails"], 
            main_image_url=p["mainImage"], 
            size = p["size"],
            brand_name=p["brandName"], 
            category_name=p["categoryName"]
        ))

#productName,price,currency,productUrl,gender,productDetails,mainImageUrl,size,brandName,categoryName
    for p in kuchi_data:
        db.session.add(Products(
            product_name=p["productName"], 
            price=p["price"],
            currency=p["currency"],
            product_url=p["productUrl"], 
            gender=p["gender"], 
            product_detail=p["productDetails"], 
            main_image_url=p["mainImageUrl"], 
            size = p["size"],
            brand_name=p["brandName"], 
            category_name=p["categoryName"]
        ))
        
    db.session.commit()


if __name__ == "__main__":
    cli()