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
with open (os.path.abspath('../static_data/json_files/eb_data.json')) as f:
    json = json.load(f)
    f.close()

# List of dictionaries where each dict is a product. To be populated as data is parsed.
all_product_info = []

# Loop through every product to parse data
for i in range(len(json['products'])):
    current_product = {}
    
    # Skip donation card since its not a product
    if (json['products'][i]['productName'] != 'Sewing Machine Project Donation Card'):
        # Parse out all the required informartion from JSON object
        current_product['productName'] = json['products'][i]['productName']

        current_product['price'] = float(json['products'][i]['priceInEuros'][2:])

        # Use helper function to convert currency symbol to 3 char string representation
        current_product['currency'] = curr_symbol_to_code(json['products'][i]['priceInEuros'][1:2])
        
        current_product['productUrl'] = json['products'][i]['productUrl']
        
        current_product['gender'] = 'F'
        
        current_product['productDetails'] = json['products'][i]['productDetails'].replace('\n', " ")
        
        current_product['mainImageUrl'] = json['products'][i]['image1']
        
        current_product['brandName'] = 'Electric Bazaar'
        
        current_product['categoryName'] = str(json['products'][i]['productName']).rsplit(' ', 1)[-1]
        
        # Add the current product dict into list of all products
        all_product_info.append(current_product)
    


# Set up to write parsed data into structured csv file
csv_columns = ['productName', 'price', 'currency', 'productUrl', 'gender', 'productDetails', 'mainImageUrl', 'brandName', 'categoryName']
csv_file = '../static_data/csv_files/parsed_eb.csv'

# Write parsed data into file parsed_eb.csv
with open(csv_file, 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
    writer.writeheader()
    for data in all_product_info:
        writer.writerow(data)