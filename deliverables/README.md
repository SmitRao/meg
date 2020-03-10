# My Ethical Garment (MEG)

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?

 **My Ethical Garment** is an web application that acts as a clothing search engine for ethical brands. 
 Users, who want to be more ethically conscious of their clothing purchases, but don’t know where to start, can use this website to search for clothing from ethical brands. My Ethical Garment helps people to search ethical clothing in efficient ways. Users can serach for specific clothing, filter by selected filters, and view the results in sorted order.

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built
 
![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/user_workflow_2.png)
 Key features in the application are **searching**, **displaying**, **filtering**, **sorting**, and **redirecting**.
 * **Searching**: Users can search for products using keywords. If the keyword macthces with product name, details, or other attributes, the product comes up at result pages. 
 * **Displaying**: The website will return clothes from brands that satisfy the query.
 * **Filtering**: Users can filter their results. For example, they can filter their results to see only women's clothing.
 * **Sorting**: Users can view the results in sorted order. For example, they can sort the results by price from low to high.
 * **Redirecting**: Once they find something they like, they can click the product and be redirected to the brand’s product site.

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully

![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/workflow_with_screenshots.png)
 **Home Page**<br>
 First, user enters to home page. This is the main page. User can search by key words through the search bar.
 
 **Result Page**<br>
 It displays the results of searching with available filters, available sorting values, and search bar. If users select filter, the results will be filtered by selected filters. If users specify ordering by selecting sorting value, the results will be displayed in the order of sorting value. Users can search by key words using the search bar. All results are linked to the brand's product site, so when users click specific product, it redirects to the brand's page.
 
 **How It Works Page**<br>
 This page shows how our website works.

 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).

### Technical requirements:

npm v6.13.6
  - [Get npm](https://www.npmjs.com/get-npm)

Docker v19.03.05
  - Can check version with `docker --version` in the command line
  - Note that Docker Toolbox is not enough!
    - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - OS requirements: (for Docker Desktop)
      - Microsoft Windows 10 Professional or Enterprise 64-bit
      - macOS must be version 10.13 or newer
  - Note that for some Windows users, users need to allow Docker to access C-drive for file sharing
    - In the Docker Dashboard, go to Settings (gear icon in top right)
    - Under "Select the local drives to be available to your containers", check "C-drive" is selected

### Setup Instructions:
 1. In the folder of your choice, clone the repo: `git clone https://github.com/SmitRao/meg.git`
 2. In the terminal, from the root folder `meg` navigate to `frontend` 
 3. run `npm i`
 4. run `npm run build`
 5. In the terminal, from the root folder `meg` navigate to `backend`
 6. Enter the command: `docker-compose up -d --build`
    1. Make sure that you have root access
    2. Make sure that Docker is running on your computer
    3. This will set up the container and volumes in Docker
 7. In your browser navigate to [http://localhost:5000/](http://localhost:5000/)

### Libraries used in development

Name|Version|
--|--|
[antd](https://ant.design) | v4.0.1
[Flask](https://flask.palletsprojects.com/en/1.1.x/) | v1.1.1
[Flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) | v2.4.1
[psycopg2-binary](https://www.psycopg.org/docs/) | v2.8.4
 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
 
 As we are starting this project from black slate, we chose **MIT license** which is one of the most popular permissive licenses and puts only very limited restrictions.
