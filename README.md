# My Ethical Garment (MEG)

Repository: https://github.com/SmitRao/meg

## Description

**My Ethical Garment** is a web application that acts as a clothing search engine for ethical brands.
Users, who want to be more ethically conscious of their clothing purchases, but don’t know where to start, can use this website to search for clothing from ethical brands. My Ethical Garment helps people to search for ethical clothing in efficient ways. Users can search for specific apparel, filter by selected filters, and view the results in sorted order.

## Background
### Key Features

![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/user_workflow_2.png)
Key features in the application are **searching**, **displaying**, **filtering**, **sorting**, and **redirecting**.

- **Searching**: Users can search for products using keywords. If the keyword matches with product name, details, or other attributes, the product comes up at result pages.
- **Displaying**: The website will return clothes from brands that satisfy the query.
- **Filtering**: Users can filter their results. For example, they can filter their results to see only women's clothing.
- **Sorting**: Users can view the results in sorted order. For example, they can sort the results by price from low to high.
- **Redirecting**: Once they find something they like, they can click the product and be redirected to the brand’s product site.

## Development setup
Please make sure you have [Docker installed](https://docs.docker.com/get-docker/) on your machine. Also, Google Chrome would be the recommended browser you should use to test the app.

Next, add aliases we specify in ```backend/.bashrc``` to your machine's ```bashrc``` file.

For the Frontend side, you will need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as well as [React](https://reactjs.org/docs/getting-started.html) and [Ant Design](https://ant.design/docs/react/introduce#Installation).

## File structure
```bash
├── backend
│   ├── project
│   │   ├── product_data
|   |   |   ├── parsed_eb.csv
|   |   |   ├── parsed_eb_kuchi.csv
|   |   |   ├── parsed_nea.csv
|   |   ├── static
|   |   |   ├── react
|   |   |   |   ├── css
|   |   |   |   |   ├── ...
|   |   |   |   ├── js
|   |   |   |   |   ├── ...
|   |   |   |   ├── media
|   |   |   |   |   ├── ...
|   |   |   |   |
|   |   |   |   ├── ...
|   |   ├── templates
|   |   |   ├── index.html
|   |   ├── __init__.py
|   |   ├── config.py
|   |   ├── currency.py
|   |   ├── models.py
│   ├── .bashrc
│   ├── .env.dev
│   ├── Dockerfile
│   ├── deploy.txt
│   ├── docker-compose.yml
│   ├── entrypoint.sh
│   ├── manage.py
│   ├── requirements.txt
├── database
│   ├── parsing
|   |   ├── parsing_eb.py
|   |   ├── parsing_eb_kuchi.py
|   |   ├── parsing_nea.py
│   ├── sql
|   |   ├── (*).sql
│   ├── static_data
|   |   ├── csv_files
|   |   |   ├── parsed_eb.csv
|   |   |   ├── parsed_images.csv
|   |   |   ├── parsed_nea.csv
|   |   ├── json_files
|   |   |   ├── eb_data.json
|   |   |   ├── eb_kuchi_data.json
|   |   |   ├── nea_data.json
├── deliverables
│   ├── (*).md
│   ├── (*).png
├── frontend
│   ├── config
|   |   ├── jest/...
|   |   ├── paths.js
|   |   ├── (*).js
│   ├── public
|   |   ├── favicon.ico
|   |   ├── index.html
|   |   ├── manifest.json
|   |   ├── robots.txt
|   |   ├── (*).png
│   ├── scripts
|   |   ├── (*).js
│   ├── src
|   |   ├── __tests__
|   |   |   ├── __snapshots__/...
|   |   |   ├── (*).test.js
|   |   ├── assets
|   |   |   ├── logo.svg
|   |   |   ├── pictures-carousel.png
|   |   ├── components
|   |   |   ├── MegFooter/...
|   |   |   ├── Navbar/...
|   |   |   ├── Results/...
|   |   |   ├── Searchbar/...
|   |   ├── constants
|   |   |   ├── FilterOptions.js
|   |   ├── screens
|   |   |   ├── AboutBrands/...
|   |   |   ├── Home/...
|   |   |   ├── HowItWorks/...
|   |   |   ├── Results/...
|   |   ├── App.js
|   |   ├── index.js
|   |   ├── serviceWorker.js
|   |   ├── setupTests.js
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
├── LICENSE
└── .gitignore
```

## Notes for future developers

### Scraping
(need to add docs)

### Frontend to backend (build instructions)
In the ```frontend/``` folder, run the command ```npm run build``` and let React eject and build a production-version of the application. This will inject static template (markup/stylesheet) files into ```backend/project/static/react/...```

Next, ```cd``` into the ```backend``` directory and run ```sudo dockdown && dockup```. You should be able ot see the latest version of the frontend app on http://localhost:5000.

### Deploy dockerized version
Sign up for [AWS](https://aws.amazon.com/) and register IAM roles for the person(s) responsible for deployement in your team. The individual(s) deploying should first create an AmazonLinux/Ubuntu [EC2](https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2) instance with security settings configured appropriately to allow development on all ports.

The ```{secret}.pem``` file is a secret key associated with your AWS EC2 instance, and should not be exposed publicly. Save the secret securely. 

When deploying, make sure you...

1) `cd` into the folder where you've saved ```{secret}.pem```
2) Know the path to the /meg/backend directory, ex. "~/path/to/meg/backend"

When you're ready, enter the following commands for deployment (replacing **```~/path/to/meg/backend```** appropriately, as well as **```@3.88.174.215```** to point to your actual ec2 IP):

1.  ```scp -r -i``` **```{secret}.pem```** ```/path/to/meg/backend ec2-user```**```@3.88.174.215```**```:~/```
2.  ```ssh -i``` **```{secret}.pem```** ```ec2-user```**```@3.88.174.215```**
3.  (follow installation instructions for Ubuntu/Fedora Docker installation, based on your EC2 linux type)
4.  ```cd backend && dockdown && dockup```

Test the deployment by heading over to [http://**```ec2-3-88-174-215```**.compute-1.amazonaws.com:5000/](#) (replace **```ec2-3-88-174-215```** with your actual [EC2](https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2) instance url base).

If stuck, search for relevant Medium articles written on the topic -- these are a great resource as there have been several flavors of the operation described by different contributors.

### Add a custom URL (e.g. http://myethicalgarment.com)
Register or transfer your domain on AWS Route 53, and create the DNS records to point to your EC2 instance (there are docs from AWS that help you do this). You may want to set up CloudFront/Cert manager/S3 buckets as needed for SSL configuration.

## Tests

### Frontend tests
The tests (using Jest for frontend) can be found in ```frontend/src/__tests__```, and you can follow Jest instructions to test these and add more React tests here.


### Backend tests

1. Set up the docker container (if you haven't already started it yet)
   1. In the command line, from the root project directory `meg` navigate to `backend`
   2. Run the command `docker-compose up -d --build` to start the container for running the backend
      1. This command will initialize the tables in the db and populate it with product data in the Docker container
      2. Refer to technical requirements on the software needed for docker

### Database tests

1. To view the contents of the database, use the command `docker-compose exec db psql --username=hello_flask --dbname=hello_flask_dev`
2. This will open the psql server that contains the product data.
   1. the prompt should show:

        ```psql
        $ docker-compose exec db psql --username=hello_flask --dbname=hello_flask_dev
        psql (12.2)
        Type "help" for help.

        hello_flask_dev=#
        ```

3. You can run any PostgreSQL queries to view the contents of the db.
4. `\d` will list all the relations and their names
   1. There should be 4:
   2. Example: `\d`

        ```psql
        hello_flask_dev=# \d
                        List of relations
        Schema |          Name          |   Type   |    Owner
        --------+------------------------+----------+-------------
        public | brands                 | table    | hello_flask
        public | categories             | table    | hello_flask
        public | products               | table    | hello_flask
        public | products_ProductId_seq | sequence | hello_flask
        (4 rows)
        ```

5. `\d+` and the relation name will display details about the columns of that relation
   1. Example: `\d+ products`
6. Other queries you can test:
    - `SELECT * FROM brands;` will show the brands that MEG features and their home URLs
    - `SELECT * FROM categories;` will show the categories of clothing
    - `SELECT * FROM products;` will return the entire database of products that can be searched
7. Once you're done exploring the database, you can quit with the command `\q`

### Backend tests

NOTE: if at any point you encounter errors due to searching for invalid inputs, you will need to restart the container!

1. Open python in the docker container: `docker-compose exec web python`
   1. You should see:

        ```bash
        $ docker-compose exec web python
        Python 3.8.2 (default, Feb 26 2020, 15:09:34)
        [GCC 8.3.0] on linux
        Type "help", "copyright", "credits" or "license" for more information.
        >>>
        ```

2. Import the backend functions: `from project import search, filter_by_gender, filter_by_price, filter_by_category, sort_by_price_ascending, sort_by_price_descending`
3. Testing `search`
   1. `search` takes in one string input that searches the db for products with values that have that string somewhere in it's product details
      1. Only strings containing alphanumeric and space `` characters are valid
      2. Example: `search("love")`
         1. if you check length (`len(search("love")`) there should be 4 products returned
      3. Should return a list of products as dictionaries that have the string `love` somewhere in its product details
      4. Notes: exact strings are required for searching, i.e. `"LOVE" != "love"` and will not return the same results
   2. Searching for something that doesn't exist should return an empty list.
      1. Example: `search("searching")` should return an empty list
4. To test filtering and sorting functions store a `search` result in a variable (e.g. `res`)
   1. Example: `res = search("Electric Bazaar")` should return 6 results
5. Test filter by gender:
   1. `filter_by_gender` takes in 2 inputs:
      1. `res` a search result containing a list of products as dictionaries
      2. `gender` the gender of category for the product as a string (one of: `"F"`,`"M"`,`"U"`)
      3. Example: `filter_by_gender(res, "F")`
      4. Currently there are only products listed as for females, so inputs `"M"` and `"U"` for gender should return an empty list
6. Test filtering by price
   1. `filter_by_price` takes in 3 inputs: `res, max, min`
      1. `res` a search result containing a list of products as dictionaries
      2. `max` a float that is larger than `min` and is the upper bound on the products you would like to see
      3. `min` a float that is smaller than `max` and is the lower bound on the products you would like to see
      4. Example: `filter_by_price(res, 30, 20)` should return no products (no items between 30 and 20 inclusive)
      5. Example: `filter_by_price(res, 50, 45)` should return 2 products, `'Red Frill Kimono'` and `'Chikankaari Midi Dress'`
         1. Check with `filter_by_price(res, 50, 45)[0]["ProductName"]` and `filter_by_price(res, 50, 45)[1]["ProductName"]` to see the names of the products returned by filtering
7. Test filtering by category
   1. `filter_by_category` takes in 2 inputs:
      1. `res` a search result containing a list of products as dictionaries
      2. a string input `category` that contains the category name of the product
      3. Example: `filter_by_category(res, "Gharara")` should return 2 products: `'Beige Gharara'` and `'Red Gharara'`
         1. Check with `filter_by_category(res, "Gharara")[0]["ProductName"]` and `filter_by_category(res, "Gharara")[1]["ProductName"]` to see the names of the products returned by filtering
8. Test sorting by price
   1. `sort_by_price_ascending` takes 1 arguments: `res`
      1. `res` a search result containing a list of products as dictionaries
      2. Example: `sort_by_price_ascending(res)` will show you the sorted results ordered by price of products from low to high
   2. `sort_by_price_descending` takes 1 arguments: `res`
      1. `res` a search result containing a list of products as dictionaries
      2. Example: `sort_by_price_descending(res)` will show you the sorted results ordered by price of products from high to low

9. Test category size
   1. `category_size` takes 1 argument: `res`
      1. `res` a search result containing a list of products as dictionaries
      2. Example: `category_size(res)` will show you the available size by category among the searched result
10. Once you're done testing, you can quit the python shell with `quit()`


###  Scraping/Parsing tests

The brands that we are currently working with were not able to get in touch with us regarding their API endpoints, so we chose to scrape all the required product info directly from their sites. We utilized parsehub to gather the various product details we needed and exported them as JSON objects. These JSON objects were parsed and all of the data was formatted into csv files based on the database requirements. The functionality can be seen by going through the following steps. 

 1. After cloning the repo `https://github.com/SmitRao/meg.git`
    navigate to `meg/database/parsing`
 2. Run the programs `parsing_eb.py` and `parsing_nea.py`
     * These programs pull the JSON files from `meg/database/static_data/json_files` and store the resulting CSV
    files in `meg/database/static_data/csv_files` to be used by the database.


## Site navigation instructions

![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/workflow_with_screenshots.png)
**Home Page**<br>
First, the user enters the home page (main page). User can search by keywords through the search bar.

**Result Page**<br>
It displays the results of searching with available filters, available sorting values, and search bar. If users select a filter, the results will be filtered by selected filters. If users specify ordering by selecting sorting value, the results will be displayed in the order of sorting value. Users can search by keywords using the search bar. All results are linked to the brand's product site, so when users click a specific product, it redirects to the brand's page.

**How It Works Page**<br>
This page shows how our website works.

## Development requirements

### Technical requirements:

npm v6.13.6

- [Get npm](https://www.npmjs.com/get-npm)

Docker v19.03.05

- Can check the version with `docker --version` in the command line
- Note that Docker Toolbox is not enough!
  - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
  - OS requirements: (for Docker Desktop)
    - Microsoft Windows 10 Professional or Enterprise 64-bit
    - macOS must be version 10.13 or newer
- Note that for some Windows users, users need to allow Docker to access C-drive for file sharing
  - In the Docker Dashboard, go to Settings (gear icon in top right)
  - Under "Select the local drives to be available to your containers," check "C-drive" is selected

### Setup Instructions:

1.  In the folder of your choice, clone the repo: `git clone https://github.com/SmitRao/meg.git`
2.  In the terminal, from the root folder, `meg` navigate to `frontend`
3.  run `npm i`
4.  run `npm run build`
5.  In the terminal, from the root folder `meg` navigate to `backend`
6.  Enter the command: `docker-compose up -d --build`
    1. Make sure you have root access
    2. Make sure that Docker is running on your computer
    3. This will set up the container, images, and volumes in Docker
7.  In your browser navigate to [http://localhost:5000/](http://localhost:5000/) to view the application
8.  Once you're done browsing, in the terminal, from the root folder `meg` navigate to `backend`
9.  Enter the command: `docker-compose down -v`
    1.  This will remove the container and volumes created for this session in Docker

### Libraries/technologies used in development

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------  |
| [antd](https://ant.design)                                               | v4.0.1   |
| [Flask](https://flask.palletsprojects.com/en/1.1.x/)                     | v1.1.1   |
| [Flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) | v2.4.1   |
| [psycopg2-binary](https://www.psycopg.org/docs/)                         | v2.8.4   |
| [jest](https://www.npmjs.com/package/jest)                               | v24.9.0  |
| [enzyme js testing](https://www.npmjs.com/package/enzyme)                | v3.11.0  |
| [React](https://reactjs.org/)                                            | v16.13.0 |
| [Docker](https://www.docker.com/get-started)                             | v19.03.6 |
| [PostgreSQL](https://www.postgresql.org/)                                | v9.5     |


## Github Workflow

In order to avoid conflicts, the codebase was set up so that each subteam has its own project folder that they are in charge of. This was a decision to crucial to ensure that the code is organized and can easily be navigated by any member of the development team. This also helped ensure that there were minimal code conflicts.

During development, everyone made their branches from the main development branch (`master`) that they would work on. Naming conventions that we used generally involved the name of the person working on that branch and the feature that they were implementing. This helped to organize the work that was being done throughout the repository.

Pull requests to the main development branch were only made after a complete feature on a branch was completed. Members of the team performed code reviews, and issues were pointed out on the group Slack channel. If there were any issues with the feature, adjustments would be made on the branch where the feature was implemented and reviewed again.

When the project was completed, following review by the team members and our project partner, we merged the project from the development branch to the deployment branch `deployed`.

We suggest following this process moving forward.

## License

We, the developers, collectively agreed that we don't care who uses this project, and for what purpose (commercial or otherwise). Hence we want the most permissive licence for this project, so as to enable our partner (MEG) as well as anyone else to piggyback off our codebase and create a web application with search-engine capabilities.

For this reason, we chose the [**MIT license**](https://choosealicense.com/licenses/mit/), which is one of the most popular permissive licenses and puts only minimal restrictions.
