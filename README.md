# My Ethical Garment
MEG is a fullstack application which serves as a search engine for ethically-sourced fashion.

## Installation
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

### Built with
- [Ant Design](https://ant.design/components/button/)
- [Flask](https://palletsprojects.com/p/flask/)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/get-started)
- [Jest](https://jestjs.io/)
- [PostgreSQL](https://www.postgresql.org/)

### Scraping

### Frontend to backend (build instructions)
In the ```frontend/``` folder, run the command ```npm run build``` and let React eject and build a production-version of the application. This will inject static template (markup/stylesheet) files into ```backend/project/static/react/...```. 

Next, ```cd``` into the ```backend``` directory and run ```sudo dockdown && dockup```. You should be able ot see the latest version of the frontend app on http://localhost:5000.

### Dockerize

### Deployment

### Tests



## License
[MIT](https://choosealicense.com/licenses/mit/)
