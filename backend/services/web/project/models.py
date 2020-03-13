from project import db

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
    
    def asDict(self):
        d = {
            "ProductName" : self.ProductName,
            "PriceInEuros": self.PriceInEuros,
            "ProductUrl": self.ProductUrl,
            "Gender": self.Gender,
            "ProductDetail": self.ProductDetail,
            "MainImageUrl": self.MainImageUrl,
            "BrandName": self.BrandName,
            "CategoryName": self.CategoryName
        }
        return d

    # def __repr__(self):
    #     return '<Products {}>'.format(self.ProductName)

    # def search(self, search_keyword):
    #     res = Products.filter(or_(self.ProductName.like('%'+search_keyword+'%'),
    #                             self.PriceInEuros.like('%'+search_keyword+'%'),
    #                             self.Gender.like('%'+search_keyword+'%'),
    #                             self.ProductDetail.like('%'+search_keyword+'%'),
    #                             self.BrandName.like('%'+search_keyword+'%'),
    #                             self.CategoryName.like('%'+search_keyword+'%')))
    #     return res

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