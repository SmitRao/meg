from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


# class User(db.Model):
#     __tablename__ = "users"

#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(128), unique=True, nullable=False)
#     active = db.Column(db.Boolean(), default=True, nullable=False)

#     def __init__(self, email):
#         self.email = email

class Brands(db.Model):
    __tablename__ = "Brands"

    brand_name = db.Column("BrandName", db.String(50), primary_key=True, unique=True, nullable=False)
    brand_url = db.Column("BrandUrl", db.Text, unique=True, nullable=False)

    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    products = db.relationship('Products', cascade="all,delete", backref='Brands', lazy=True)

class Categories(db.Model):
    __tablename__ = "Categories" 

    category_name = db.Column("CategoryName", db.String(50), primary_key=True, unique=True, nullable=False)

    products = db.relationship('Products', cascade="all,delete", backref='Categories', lazy=True) 

class Products(db.Model):
    __tablename__ = "Products"

    product_id = db.Column("ProductId", db.Integer, primary_key = True)
    product_name = db.Column("ProductName", db.String(50), nullable=False)
    price_in_euros = db.Column("PriceInEuros", db.Float(4), nullable=False)
    product_url = db.Column("ProductUrl", db.Text, unique=True, nullable=False)
    gender = db.Column("gender", db.String(1))
    product_detail = db.Column("ProductDetail", db.Text)
    main_image_url = db.Column("MainImageUrl", db.Text)
    brand_name = db.Column("BrandName", db.String(50), nullable=False)
    category_name = db.Column("CategoryName", db.String(50), nullable=False)
    brand_name = db.Column("BrandName", db.String(50), db.ForeignKey('Brands.BrandName'), nullable=False)
    category_name = db.Column("CategoryName", db.String(50), db.ForeignKey('Categories.CategoryName'), nullable=False)

    preview_images = db.relationship('PreviewImages', cascade="all,delete", backref='products', lazy=True) 

class PreviewImages(db.Model):
    __tablename__ = 'PreviewImages'

    preview_image_url = db.Column("PreviewImageUrl", db.Text, unique = True, nullable = False, primary_key = True)
    product_url = db.Column("ProductUrl", db.Text, db.ForeignKey('Products.ProductUrl'), nullable=False)


@app.route("/")
def hello_world():
    return jsonify(hello="everyone")
