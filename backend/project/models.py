from project import db
from project.currency import convert_value_to_curr

class Brands(db.Model):
    __tablename__ = "brands"

    brand_name = db.Column(db.String(50), primary_key=True, unique=True, nullable=False)
    brand_url = db.Column(db.Text, unique=True, nullable=False)

    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    products = db.relationship('Products', cascade="all,delete", backref='brands', lazy=True)

    def __init__(self, brand_name, brand_url):
        self.brand_name=brand_name
        self.brand_url=brand_url

    def __repr__(self):
        return '<Brands {}>'.format(self.brand_name)

class Categories(db.Model):
    __tablename__ = "categories" 

    category_name = db.Column(db.String(50), primary_key=True, unique=True, nullable=False)

    products = db.relationship('Products', cascade="all,delete", backref='categories', lazy=True) 

    def __init__(self, category_name):
        self.category_name=category_name

    def __repr__(self):
        return '<Categories {}>'.format(self.category_name)

class Products(db.Model):
    __tablename__ = "products"

    product_id = db.Column(db.Integer, primary_key = True)
    product_name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float(4), nullable=False)
    currency = db.Column(db.String(3), nullable=False)
    product_url = db.Column(db.Text, unique=True, nullable=False)
    gender = db.Column(db.String(1))
    product_detail = db.Column(db.Text)
    main_image_url = db.Column(db.Text)
    size = db.Column(db.Text)
    brand_name = db.Column(db.String(50), db.ForeignKey('brands.brand_name'), nullable=False)
    category_name = db.Column(db.String(50), db.ForeignKey('categories.category_name'), nullable=False)

    # preview_images = db.relationship('PreviewImages', cascade="all,delete", backref='products', lazy=True) 

    def __init__(self, product_name, price, currency, product_url, gender, product_detail, main_image_url, size, brand_name, category_name):
        self.product_name=product_name
        self.price=price
        self.currency=currency
        self.product_url=product_url
        self.gender=gender
        self.product_detail=product_detail
        self.main_image_url=main_image_url
        self.size = size
        self.brand_name=brand_name
        self.category_name=category_name
    
    def asDict(self):
        d = {
            "ProductId" : self.product_id,
            "ProductName" : self.product_name,
            # "Price": self.price,
            # TODO: to change this to price, will need to change in frontend as well!
            "PriceInEuros": self.price,
            "Currency":self.currency,
            "ProductUrl": self.product_url,
            "Gender": self.gender,
            "ProductDetail": self.product_detail,
            "MainImageUrl": self.main_image_url,
            "Size": self.size,
            "BrandName": self.brand_name,
            "CategoryName": self.category_name
        }
        return d

    def asDictPriceInUSD(self):
        price_in_usd = convert_value_to_curr(self.price, self.currency, "USD")
        d = {
            "ProductId" : self.product_id,
            "ProductName" : self.product_name,
            # "Price": self.price,
            # TODO: to change this to price, will need to change in frontend as well!
            "PriceInEuros": price_in_usd,
            "Currency":"USD",
            "ProductUrl": self.product_url,
            "Gender": self.gender,
            "ProductDetail": self.product_detail,
            "MainImageUrl": self.main_image_url,
            "Size": self.size,
            "BrandName": self.brand_name,
            "CategoryName": self.category_name
        }
        return d