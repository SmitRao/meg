import json 
import os
import unicodedata
import csv

### Heavily commented to avoid eye strain from staring at string slicing ###

with open (os.path.abspath('./static_data/json_files/eb_data.json')) as f:
    json = json.load(f)
    f.close()

# List of dictionaries where each dict is a product. To be populated as data is parsed.
all_product_info = []

# Loop through every product to parse data
for i in range(len(json['products'])):
#    print(json['products'])
    current_product = {}
    
    # Only parse data for valid products
    if (json['products'][i]['productName'] != 'Sewing Machine Project Donation Card'):
        current_product['productName'] = json['products'][i]["productName"]

        current_product['priceInEuros'] = float(json['products'][i]["priceInEuros"][2:])
        
        current_product['productUrl'] = json['products'][i]['productUrl']
        
        current_product['gender'] = 'F'
        
        current_product['productDetails'] = json['products'][i]['productDetails'].replace('\n', " ")
        
        current_product['mainImageUrl'] = json['products'][i]['image1']
        
        current_product['brandName'] = 'Electric Bazaar'
        
        current_product['categoryName'] = str(json['products'][i]['productName']).rsplit(' ', 1)[-1]
        
        all_product_info.append(current_product)
    
    #print(current_product)
    #print("\n")

print(all_product_info)
#print(json['products'])
# wirte the results in csv file
csv_columns = ['productName', 'priceInEuros', 'productUrl', 'gender', 'productDetails', 'mainImageUrl', 'brandName', 'categoryName']
csv_file = './static_data/csv_files/parsed_eb.csv'

with open(csv_file, 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
    writer.writeheader()
    for data in all_product_info:
        writer.writerow(data)