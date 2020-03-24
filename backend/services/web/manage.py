from flask.cli import FlaskGroup
# from sqlalchemy import or_,text


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
    db.session.add(Brands("Electric Bazaar", "https://www.electric-bazaar.com/heritage"))
    db.session.add(Brands("Nea", "https://n-e-a.co.uk/"))

    # add categories to category
    categories_values = ["Hijab", "Gharara", "Kimono", "Dress"]
    for category in categories_values:
        db.session.add(Categories(category_name=category))

    # add eb products to products
    # productName,price_in_euros,product_url,gender,productDetails,mainImageUrl,brandName,categoryName
    for p in eb_data:
        db.session.add(Products(
            product_name=p[0], 
            price_in_euros=p[1], 
            product_url=p[2], 
            gender=p[3], 
            product_detail=p[4], 
            main_image_url=p[5], 
            brand_name=p[6], 
            category_name=p[7]
        ))

    # productName,price_in_euros,product_url,gender,productDetails,mainImage,brandName,categoryName
    for p in nea_data:
        db.session.add(Products(
            product_name=p[0], 
            price_in_euros=p[1], 
            product_url=p[2], 
            gender=p[3], 
            product_detail=p[4], 
            main_image_url=p[5], 
            brand_name=p[6], 
            category_name=p[7]
        ))
    
    db.session.commit()


if __name__ == "__main__":
    cli()
