CREATE DATABASE agriecom;

CREATE TABLE cart ( product_id INT NOT NULL );

CREATE TABLE
    products(
        product_id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        price FLOAT,
        description VARCHAR(1000),
        category VARCHAR(100),
        quantity INT,
        seller_id INT,
        image VARCHAR(100)
    );

CREATE TABLE
    users(
        name VARCHAR(100),
        email VARCHAR(100) PRIMARY KEY,
        password VARCHAR(100) NOT NULL,
        phone VARCHAR(100),
        address VARCHAR(100),
        role VARCHAR(100)
    );