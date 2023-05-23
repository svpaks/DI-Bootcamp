-- Part I

-- 1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- CREATE TABLE Customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(30) NOT NULL,
-- 	last_name VARCHAR(30) NOT NULL
-- )

-- CREATE TABLE Customer_profile (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false, 
-- 	customer_id INTEGER, 
-- 	FOREIGN KEY(customer_id) REFERENCES Customer(id)
-- )


-- 2. Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- 3. INSERT INTO Customer (first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')


-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in



-- 4. Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- The number of customers that are not LoggedIn
