import json 
import os
import unicodedata
import csv

# Function that converts currency symbol into 3 char string (currency code) to be returned
def curr_symbol_to_code(symbol):
    code = ""
    if symbol == "£":
        code = "GBP"
    elif symbol == "€":
        code = "EUR"
    elif symbol == "₽":
        code = "RUB"

    return code

# Open json of scraped data to be parsed
with open (os.path.abspath('../static_data/json_files/nea_data.json')) as f:
    json = json.load(f)
    f.close()

# List of dictionaries where each dict is a product. To be populated as data is parsed.
all_product_info = []

# Loop through every product to parse data
for i in range(len(json['products'])):
    current_product = {}

    # Parse out all required info from JSON object
    
    current_product['productName'] = json['products'][i]['productName']

    current_product['price'] = float(json['products'][i]['priceInEuros'][2:])

    current_product['currency'] = curr_symbol_to_code(json['products'][i]['priceInEuros'][1:2])
    
    current_product['productUrl'] = json['products'][i]['productUrl']
        
    current_product['gender'] = 'F'
        
    current_product['productDetails'] = json['products'][i]['productDescription'][0]['data'].replace('\n', " ")
        
    current_product['mainImage'] = json['products'][i]['mainImage']
        
    current_product['brandName'] = 'Nea'
        
    current_product['categoryName'] = 'Hijab'

    # Add the current product dict into list of all products
    all_product_info.append(current_product)


# Set up to write parsed data into structured csv file
csv_columns = ['productName', 'price', 'currency', 'productUrl', 'gender', 'productDetails', 'mainImage', 'brandName', 'categoryName']
csv_file = '../static_data/csv_files/parsed_nea.csv'

# Write parsed data into file parsed_nea.csv
with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
        writer.writeheader()
        for data in all_product_info:
            writer.writerow(data)