-- Create a database called public.
-- Add two tables:
-- items
-- customers.


-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80


-- CREATE TABLE items (
-- 	name_item VARCHAR(100) NOT NULL,
-- 	price_item SMALLINT NOT NULL
-- )

-- INSERT INTO items (name_item, price_item)
-- VALUES 
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80)


-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

-- CREATE TABLE customers (
-- 	customer_name VARCHAR(100) NOT NULL,
-- 	customer_lastname VARCHAR(100) NOT NULL
-- )

-- INSERT INTO customers (customer_name, customer_lastname)
-- VALUES 
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- Use SQL to fetch the following data from the database:
-- All the items.

-- SELECT * FROM items

-- All the items with a price above 80 (80 not included).

-- SELECT * FROM items WHERE price_item > 80

-- All the items with a price below 300. (300 included)

-- SELECT * FROM items WHERE price_item <= 300

-- All customers whose last name is ‘Smith’ (What will be your outcome?).

-- SELECT * FROM customers WHERE customer_lastname = 'Smith' 
-- outcome is an empty table

-- All customers whose last name is ‘Jones’.

-- SELECT * FROM customers WHERE customer_lastname = 'Jones' 

-- All customers whose firstname is not ‘Scott’.

-- SELECT * FROM customers WHERE customer_name != 'Scott' 






