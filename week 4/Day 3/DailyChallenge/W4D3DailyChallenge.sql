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

-- INSERT INTO Customer (first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')


-- 3. Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO Customer_profile (isLoggedIn, customer_id)
-- VALUES
--     (true, (SELECT id FROM Customer WHERE first_name = 'John')),
--     (false, (SELECT id FROM Customer WHERE first_name = 'Jerome'))

-- 4. Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers

-- SELECT first_name
-- FROM Customer
-- JOIN Customer_Profile ON Customer.id = Customer_Profile.customer_id
-- WHERE isLoggedIn = true

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT first_name, isLoggedIn
-- FROM Customer
-- LEFT JOIN Customer_Profile ON Customer.id = Customer_Profile.customer_id

-- The number of customers that are not LoggedIn

-- SELECT COUNT(*) AS num_customers_not_logged_in
-- FROM Customer
-- LEFT JOIN Customer_Profile ON Customer.id = Customer_Profile.customer_id
-- WHERE isLoggedIn = false OR isLoggedIn IS NULL
