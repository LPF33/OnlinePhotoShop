CREATE DATABASE shopiholic;
USE shopiholic;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id int NOT NULL auto_increment,
    name varchar(100) NOT NULL,
    image varchar(250) NOT NULL,
    description varchar(1000) NOT NULL,
    brand varchar(30),
    category varchar(30),
    categories VARCHAR(30),
    price decimal(6,2) NOT NULL,
    stock int NOT NULL,
    rating decimal(2,1),
    numReviews int,
    primary key (id)
);

INSERT INTO products (name, image, description, brand, category, price, stock, rating, numReviews) 
    VALUES ("HAMA Circular", "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74695336/fee_786_587_png", 
    "Filterdurchmesser: 62 mm, Farbe: Schwarz", "hama", "Objective lens", 37.84, 1, 0, 0
);