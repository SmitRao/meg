from project import db

class Brands(db.Model):
    __tablename__ = "brands"

    BrandName = db.Column(db.String(50), primary_key=True, unique=True, nullable=False)
    BrandUrl = db.Column(db.Text, unique=True, nullable=False)

    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    products = db.relationship('Products', cascade="all,delete", backref='brands', lazy=True)

    def __init__(self, BrandName, BrandUrl):
        self.BrandName=BrandName
        self.BrandUrl=BrandUrl

    def __repr__(self):
        return '<Brands {}>'.format(self.brand_name)

class Categories(db.Model):
    __tablename__ = "categories" 

    CategoryName = db.Column(db.String(50), primary_key=True, unique=True, nullable=False)

    products = db.relationship('Products', cascade="all,delete", backref='categories', lazy=True) 

    def __init__(self, CategoryName):
        self.CategoryName=CategoryName

    def __repr__(self):
        return '<Categories {}>'.format(self.category_name)

class Products(db.Model):
    __tablename__ = "products"

    ProductId = db.Column(db.Integer, primary_key = True)
    ProductName = db.Column(db.String(50), nullable=False)
    PriceInEuros = db.Column(db.Float(4), nullable=False)
    ProductUrl = db.Column(db.Text, unique=True, nullable=False)
    Gender = db.Column(db.String(1))
    ProductDetail = db.Column(db.Text)
    MainImageUrl = db.Column(db.Text)
    BrandName = db.Column(db.String(50), db.ForeignKey('brands.BrandName'), nullable=False)
    CategoryName = db.Column(db.String(50), db.ForeignKey('categories.CategoryName'), nullable=False)

    # preview_images = db.relationship('PreviewImages', cascade="all,delete", backref='products', lazy=True) 

    def __init__(self, ProductName, PriceInEuros, ProductUrl, Gender, ProductDetail, MainImageUrl, BrandName, CategoryName):
        self.ProductName=ProductName
        self.PriceInEuros=PriceInEuros
        self.ProductUrl=ProductUrl
        self.Gender=Gender
        self.ProductDetail=ProductDetail
        self.MainImageUrl=MainImageUrl
        self.BrandName=BrandName
        self.CategoryName=CategoryName

    def __repr__(self):
        return '<Products {}>'.format(self.product_name)

# class PreviewImages(db.Model):
#     __tablename__ = 'preview_images'

#     PreviewImageUrl = db.Column(db.Text, unique = True, nullable = False, primary_key = True)
#     # ProductUrl = db.Column(db.Text, nullable=False)
#     ProductUrl = db.Column(db.Text, db.ForeignKey('products.ProductUrl'), nullable=False)

#     def __init__(self, PreviewImageUrl, ProductUrl):
#         self.PreviewImageUrl=PreviewImageUrl
#         self.ProductUrl=ProductUrl

#     def __repr__(self):
#         return '<PreviewImages {}>'.format(self.product_url)