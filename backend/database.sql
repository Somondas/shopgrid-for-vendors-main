CREATE DATABASE  vendors_data;

CREATE TABLE grocery_items (
    id INT SERIAL PRIMARY KEY,
    user_uid varchar(255) NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    item_price DECIMAL(10, 2) NOT NULL,
    hero_image  VARCHAR(255) NOT NULL,
    item_description TEXT NOT NULL,
    item_category VARCHAR(255) NOT NULL,
); 