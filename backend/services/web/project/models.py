from project import db

class Brands(db.Model):
    __tablename__ = "Brands"

    brand_name = db.Column("BrandName", db.String(50), primary_key=True, unique=True, nullable=False)
    brand_url = db.Column("BrandUrl", db.Text, unique=True, nullable=False)

    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    products = db.relationship('Products', cascade="all,delete", backref='Brands', lazy=True)

    def __repr__(self):
        return '<Brands {}>'.format(self.brand_name)

class Categories(db.Model):
    __tablename__ = "Categories" 

    category_name = db.Column("CategoryName", db.String(50), primary_key=True, unique=True, nullable=False)

    products = db.relationship('Products', cascade="all,delete", backref='Categories', lazy=True) 

    def __repr__(self):
        return '<Categories {}>'.format(self.category_name)

class Products(db.Model):
    __tablename__ = "Products"

    product_id = db.Column("ProductId", db.Integer, primary_key = True)
    product_name = db.Column("ProductName", db.String(50), nullable=False)
    price_in_euros = db.Column("PriceInEuros", db.Float(4), nullable=False)
    product_url = db.Column("ProductUrl", db.Text, unique=True, nullable=False)
    gender = db.Column("gender", db.String(1))
    product_detail = db.Column("ProductDetail", db.Text)
    main_image_url = db.Column("MainImageUrl", db.Text)
    brand_name = db.Column("BrandName", db.String(50), db.ForeignKey('Brands.BrandName'), nullable=False)
    category_name = db.Column("CategoryName", db.String(50), db.ForeignKey('Categories.CategoryName'), nullable=False)

    preview_images = db.relationship('PreviewImages', cascade="all,delete", backref='products', lazy=True) 

    def __repr__(self):
        return '<Products {}>'.format(self.product_name)

class PreviewImages(db.Model):
    __tablename__ = 'PreviewImages'

    preview_image_url = db.Column("PreviewImageUrl", db.Text, unique = True, nullable = False, primary_key = True)
    product_url = db.Column("ProductUrl", db.Text, db.ForeignKey('Products.ProductUrl'), nullable=False)

    def __repr__(self):
        return '<PreviewImages {}>'.format(self.product_url)