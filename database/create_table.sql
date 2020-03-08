DROP TABLE IF EXISTS Brands;

CREATE TABLE Brands(
	BrandName VARCHAR(50) UNIQUE NOT NULL,
	BrandUrl TEXT UNIQUE NOT NULL,
	PRIMARY KEY (BrandName)
);

DROP TABLE IF EXISTS Categories;

CREATE TABLE Categories(
	CategoryName VARCHAR(50) UNIQUE NOT NULL,
	PRIMARY KEY (CategoryName)
);

DROP TABLE IF EXISTS Products;

CREATE TABLE Products(
	ProductId SERIAL,
	ProductName VARCHAR(50) NOT NULL,
	PriceInEuros FLOAT(4) NOT NULL,
	ProductUrl TEXT UNIQUE NOT NULL,
	Gender CHAR(1),
	ProductDetail TEXT,
	MainImageUrl TEXT,
	BrandName VARCHAR(50) NOT NULL ,
	CategoryName VARCHAR(50) NOT NULL,
	PRIMARY KEY (ProductId),
	FOREIGN KEY (BrandName) REFERENCES  Brands(BrandName) ON DELETE CASCADE,
	FOREIGN KEY (CategoryName) REFERENCES Categories(CategoryName) ON DELETE CASCADE
);

-- DROP TABLE IF EXISTS Images;

-- CREATE TABLE Images(
-- 	ImageId SERIAL,
-- 	ImageUrl TEXT UNIQUE NOT NULL,
-- 	ProductId INT NOT NULL,
-- 	PRIMARY KEY (ImageId),
-- 	FOREIGN KEY (ProductId) REFERENCES Products(ProductId) ON DELETE CASCADE
-- );

DROP TABLE IF EXISTS PreviewImages;

CREATE TABLE PreviewImages(
	PreviewImageUrl TEXT UNIQUE NOT NULL,
	ProductUrl TEXT NOT NULL,
	PRIMARY KEY (PreviewImageUrl),
	FOREIGN KEY (ProductUrl) REFERENCES Products(ProductUrl) ON DELETE CASCADE
);


-- DROP TABLE IF EXISTS Hijabs;

-- CREATE TABLE Hijabs(
-- 	ProductId INT UNIQUE NOT NULL, 
-- 	PriceInEuros FLOAT(4) NOT NULL,
-- 	ProductDescription TEXT NOT NULL,
-- 	DonationMessage TEXT NOT NULL,
-- 	TextileDescription TEXT NOT NULL,
-- 	TextileType VARCHAR(50) NOT NULL,
-- 	Dimensions VARCHAR(100) NOT NULL,
-- 	Contour VARCHAR(100) NOT NULL,
-- 	Thickness VARCHAR(100) NOT NULL,
-- 	Texture VARCHAR(100) NOT NULL,
-- 	Breathability VARCHAR(100) NOT NULL,
-- 	Seasonal TEXT NOT NULL,
-- 	AccessoryRequired TEXT NOT NULL,
-- 	QualityGuarantee VARCHAR(100) NOT NULL,
-- 	Opacity VARCHAR(100) NOT NULL,
-- 	PRIMARY KEY (ProductId),
-- 	FOREIGN KEY (ProductId) REFERENCES products(ProductId) ON DELETE CASCADE
-- );

-- import parsed_nea.csv file into hijabs
-- \copy products(productName,priceInEuros,productDetail, ProductUrl, BrandName, CategoryName) from '/Users/limhyesu/Documents/UofT/test_data.csv' DELIMITER ';' CSV HEADER;