
DROP DATABASE IF EXISTS bamazon_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Create the table tasks.
CREATE TABLE products
(
item_id int NOT NULL AUTO_INCREMENT,
product_name varchar(65) NOT NULL,
department_name varchar(35) NOT NULL,
stock_quantity int NOT NULL,
price int NOT NULL,
PRIMARY KEY (item_id)
);

-- Insert a set of records.
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Toilet Paper', 'Toiletries', 25, 5);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Chuck Norris Limited Edition Gi', 'Memorabilia', 15, 629);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Lifesize Blow-up Godzilla', 'Big-Toys', 2, 3);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Lord of the Dance, Michael Flately Autographed Tap Shoes', 'Memorabilia', 20, 179);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Giant Authentic Sombrero', 'Clothing', 500, 179);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Body Wash', 'Toiletries', 228, 2);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Rick Grimes Sherrif Hat', 'Memorabilia', 1500, 330);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Anti-Gravity Trousers', 'Big-Toys', 17, 10);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Furry John Snow Toe Socks', 'Clothing', 2220, 7);
INSERT INTO products ( product_name, department_name, stock_quantity, price) VALUES ('Christmas Tree', 'Memorabilia', 55, 40);
