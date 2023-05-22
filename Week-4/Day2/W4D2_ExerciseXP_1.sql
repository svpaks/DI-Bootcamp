-- Use SQL to get the following from the database:

-- 1. All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY price_item ASC

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT name_item FROM items WHERE price_item >= 80 ORDER BY price_item DESC  

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT customer_name, customer_lastname FROM customers ORDER BY customer_name ASC LIMIT 3  

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT customer_lastname FROM customers ORDER BY customer_lastname DESC 



-- SELECT * FROM customers