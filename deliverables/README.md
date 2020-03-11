# My Ethical Garment (MEG)

Repository: https://github.com/SmitRao/meg

## Description

**My Ethical Garment** is a web application that acts as a clothing search engine for ethical brands.
Users, who want to be more ethically conscious of their clothing purchases, but don’t know where to start, can use this website to search for clothing from ethical brands. My Ethical Garment helps people to search for ethical clothing in efficient ways. Users can search for specific apparel, filter by selected filters, and view the results in sorted order.

## Key Features

![UserWorkFlow](https://github.com/SmitRao/meg/blob/deliverables/deliverables/user_workflow_2.png)
Key features in the application are **searching**, **displaying**, **filtering**, **sorting**, and **redirecting**.

- **Searching**: Users can search for products using keywords. If the keyword matches with product name, details, or other attributes, the product comes up at result pages.
- **Displaying**: The website will return clothes from brands that satisfy the query.
- **Filtering**: Users can filter their results. For example, they can filter their results to see only women's clothing.
- **Sorting**: Users can view the results in sorted order. For example, they can sort the results by price from low to high.
- **Redirecting**: Once they find something they like, they can click the product and be redirected to the brand’s product site.

## Instructions

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

### Libraries used in development

| Name                                                                     | Version |
| ------------------------------------------------------------------------ | ------- |
| [antd](https://ant.design)                                               | v4.0.1  |
| [Flask](https://flask.palletsprojects.com/en/1.1.x/)                     | v1.1.1  |
| [Flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) | v2.4.1  |
| [psycopg2-binary](https://www.psycopg.org/docs/)                         | v2.8.4  |
| [jest](https://www.npmjs.com/package/jest)                               | v24.9.0 |
| [enzyme js testing](https://www.npmjs.com/package/enzyme)                | v3.11.0 |

## Deployment and Github Workflow

In order to avoid conflicts, the codebase was set up so that each subteam has its own project folder that they are in charge of. This was a decision to crucial to ensure that the code is organized and can easily be navigated by any member of the development team. This also helped ensure that there were minimal code conflicts.

During development, everyone made their branches from the main development branch (`master`) that they would work on. Naming conventions that we used generally involved the name of the person working on that branch and the feature that they were implementing. This helped to organize the work that was being done throughout the repository.

Pull requests to the main development branch were only made after a complete feature on a branch was completed. Members of the team performed code reviews, and issues were pointed out on the group Slack channel. If there were any issues with the feature, adjustments would be made on the branch where the feature was implemented and reviewed again.

When the project was completed, following review by the team members and our project partner, we merged the project from the development branch to the deployment branch `deployed`

## Licenses

We, the developers, collectively agreed that we don't care who uses this project, and for what purpose (commercial or otherwise). Hence we want the most permissive licence for this project, so as to enable our partner (MEG) as well as anyone else to piggyback off our codebase and create a web application with search-engine capabilities.

For this reason, we chose the **MIT license**, which is one of the most popular permissive licenses and puts only minimal restrictions.