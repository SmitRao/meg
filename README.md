# My Ethical Garment
MEG is a fullstack application serving as a search engine for ethically-sourced fashion.

## Installation

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

### Dockerize

### Deployment

### Tests



## License
[MIT](https://choosealicense.com/licenses/mit/)
