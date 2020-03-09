from project import models, db
import csv

# we need to insert brands, categories manually

brands = models.Brands()
query = db.insert(brands)
brands_values = [
    {'BrandName': 'Nea', 'BrandUrl': 'https://n-e-a.co.uk/'},
    {'BrandName': 'Electric Bazaar', 'BrandUrl': 'https://www.electric-bazaar.com/heritage'}
]
###### need to define connection first
connection.execute(query, brands_values)
###### 

categories = models.Categories()
query = db.insert(categories)
categories_values = ['Hijab', 'Gharara', 'Kimono', 'Dress']
###### need to define connection first
connection.execute(query, categories_values)
###### 

# insert products and previewimages from csv files
# There are so many different ways
# https://stackoverflow.com/questions/31394998/using-sqlalchemy-to-load-csv-file-into-a-database

products_eb_csv_path = '/database/static_data/csv_files/parsed_eb.csv'
products_nea_csv_path = '/database/static_data/csv_files/parsed_nea.csv'
products_columns = 'Products(productName,priceInEuros,productUrl,gender,productDetail,mainImageUrl,brandName,categoryName)'

previewImages_csv_path = '/database/static_data/csv_files/parsed_images.csv'
previewImages_columns = 'PreviewImages(productUrl, PreviewImageUrl)'

def copy_from_csv(csv_file_path, table_name_with_columns):
    with open(csv_file_path, 'r') as f:
        ######## how to create engine?
        conn = creat_engine()
        ########
        cursor = conn.cursor()
        cmd = '\copy '+ table_name_with_columns + ' from ' + csv_file_path + ' DELIMITER ',' CSV HEADER'
        cursor.copy_expert(cmd, f)
        conn.commit()
        f.close

