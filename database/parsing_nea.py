import json 
import os
import unicodedata
import csv


with open (os.path.abspath('./static_data/nea_data.json')) as f:
    json = json.load(f)
    f.close()

# List of dictionaries where each dict is a product. To be populated as data is parsed.
all_product_info = []

# Loop through every product to parse data
for i in range(len(json['products'])):
    # Dictionary to store parsed info about current product
    current_product = {}

    # Parse then convert productName from unicode to ascii and store 
    current_product['productName'] = json['products'][i]["productName"]

    # Parse then convert priceInEuros to float and store
    current_product['priceInEuros'] = float(json['products'][i]["priceInEuros"][2:])
    
    current_product['productUrl'] = json['products'][i]['productUrl']
        
    current_product['gender'] = 'F'
        
    current_product['productDetails'] = json['products'][i]['productDescription'][0]['data'].replace('\n', " ")
        
    current_product['mainImage'] = json['products'][i]['mainImage']
        
    current_product['brandName'] = 'Nea'
        
    current_product['categoryName'] = 'Hijab'
    


    # Print out each product's dictionary for now
    all_product_info.append(current_product)
    print(all_product_info[i])  
    print("\n")

# wirte the results in csv file
csv_columns = ['productName', 'priceInEuros', 'productUrl', 'gender', 'productDetails', 'mainImage', 'brandName', 'categoryName']
csv_file = './static_data/parsed_nea.csv'

with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
        writer.writeheader()
        for data in all_product_info:
            writer.writerow(data)