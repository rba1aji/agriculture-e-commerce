CREATE DATABASE agriecom;

CREATE TABLE sellers(
    seller_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL, 
    phone VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    image VARCHAR(100)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price FLOAT ,
    image VARCHAR(100) ,
    description VARCHAR(1000) ,
    category VARCHAR(100) ,
    quantity INT ,
    seller_id INT,
    FOREIGN KEY (seller_id) REFERENCES sellers(seller_id)   
);

CREATE TABLE buyers(
    buyer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);