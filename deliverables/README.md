
https://github.com/SmitRao/meg.git



# My Ethical Garment (MEG)

Repository: https://github.com/SmitRao/meg

## Description 
 **My Ethical Garment** is a web application that acts as a clothing search engine to find products exclusively from ethical brands. Users who want to be more ethically conscious regarding their clothing purchases, but don’t know where to start, can use this website to search for clothing and shop with a clear conscience knowing that all the products being shown are ethically made. The site has all of the functionality the user has come to expect from a clothing website including searching, filtering and sorting. Once the user has selected a product from the results page, they are redirected to the appropriate page on the brand's site to complete their purchase. 

## Key Features
![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/user_workflow_2.png)
 Key features in the application are **searching**, **displaying**, **filtering**, **sorting**, and **redirecting**.
 * **Searching**: Users can search for products using keywords. If the given keywords are found in a product's name, it's description, or it's other attributes, the product will be displayed on the results page. 
 * **Displaying**: The website will display only products that satisfy the search.
 * **Filtering**: Users can filter the resulting products from their search based on attributes such as gender, color, size or price. 
 * **Sorting**: Users can view the resulting products from their search sorted based on attributes such as price. 
 * **Redirecting**: Once the user finds a product they like, they can click the product and be redirected to the brand’s product site to complete their purchase.

There were a lot of moving pieces that we haven't quite put together in the app yet (we have something developed for sorting/filtering/searching, however, these haven't yet been successfully integrated to work with our application). So, for the purpose of showing a proof-of-concept (and our prioritization of Frontend/DB/Scraping) we've added mocks in the /results route and deployed only the frontend since this is what we chose to finish by the D2 deadline. **The features that have been implemented but not integrated into the deployed application at this point are shown below.**

**Scraping/Parsing**
The brands that we are currently working with were not able to get in touch with us regarding their API endpoints, so we chose to scrape all the required product info directly from their sites. We utilized parsehub to gather the various product details we needed and exported them as JSON objects. These JSON objects were parsed and all of the data was formatted in a csv based on the database requirements. The functionality can be seen by going through the following steps. 
* After cloning the repo `https://github.com/SmitRao/meg.git`, navigate to `meg/database/parsing`
* Run the programs `parsing_eb.py` and `parsing_nea.py`
* These programs pull the JSON files from `meg/database/static_data/json_files` and store the resulting csv files in `meg/database/static_data/csv_files`


## Instructions
![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/workflow_with_screenshots.png)
 **Home Page**<br>
The user enters the website and is greeted by the home page. The home page has a search bar as well as links to other parts of the website. Users can click the "Learn how it works" link to be shown a quick guide for using the site and search for products using the search bar in the center of the page to be taken to the results page. 
 
 **Result Page**<br>

Once the user searches, they are taken to the results page. The results page displays all of the products that match the user's search terms, as well as a set of filters that can be applied to the products being displayed. The products being displayed can also be sorted based on their price in either ascending or descending order. The results page also has a search bar so the user can modify their search without leaving the page. Once a user has selected a product they like, they can click it and be redirected to the brand's site to complete their purchase. 
 
 **How It Works Page**<br>
 This page provides a quick guide for users to navigate and use the website effectively. 

 
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
 1. In the folder of your choice, clone the repo: `git clone https://github.com/SmitRao/meg.git`
 2. In the terminal, from the root folder, `meg` navigate to `frontend` 
 3. run `npm i`
 4. run `npm run build`
 5. In the terminal, from the root folder `meg` navigate to `backend`
 6. Enter the command: `docker-compose up -d --build`
    1. Make sure you have root access
    2. Make sure that Docker is running on your computer
    3. This will set up the container, images, and volumes in Docker
 7. In your browser navigate to [http://localhost:5000/](http://localhost:5000/) to view the application
 8. Once you're done browsing, in the terminal, from the root folder `meg` navigate to `backend`
 9. Enter the command: `docker-compose down -v`
    1.  This will remove the container and volumes created for this session in Docker

### Libraries used in development

Name|Version|
--|--|
[antd](https://ant.design) | v4.0.1
[Flask](https://flask.palletsprojects.com/en/1.1.x/) | v1.1.1
[Flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) | v2.4.1
[psycopg2-binary](https://www.psycopg.org/docs/) | v2.8.4
[jest](https://www.npmjs.com/package/jest)| v24.9.0
[enzyme js testing](https://www.npmjs.com/package/enzyme)| v3.11.0
 
 ## Deployment and Github Workflow

In order to avoid conflicts, the codebase was set up so that each subteam has its own project folder that they are in charge of. This was a decision to crucial to ensure that the code is organized and can easily be navigated by any member of the development team. This also helped ensure that there were minimal code conflicts.

During development, everyone made their branches from the main development branch (`master`) that they would work on. Naming conventions that we used generally involved the name of the person working on that branch and the feature that they were implementing. This helped to organize the work that was being done throughout the repository.

Pull requests to the main development branch were only made after a complete feature on a branch was completed. Members of the team performed code reviews, and issues were pointed out on the group Slack channel. If there were any issues with the feature, adjustments would be made on the branch where the feature was implemented and reviewed again.

When the project was completed, following review by the team members and our project partner, we merged the project from the development branch to the deployment branch `deployed`

 ## Licenses 
We, the developers, collectively agreed that we don't care who uses this project, and for what purpose (commercial or otherwise). Hence we want the most permissive licence for this project, so as to enable our partner (MEG) as well as anyone else to piggyback off our codebase and create a web application with search-engine capabilities.

For this reason, we chose the  **MIT license**, which is one of the most popular permissive licenses and puts only minimal restrictions.