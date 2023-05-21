-- 1. Create a database called public.

-- 2. Add two tables:
-- 		- items
-- 		- customers.

-- CREATE TABLE items (
-- 	item_name VARCHAR(100) NOT NULL,
-- 	item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers (
-- 	customer_firstname VARCHAR(100) NOT NULL,
-- 	customer_lastname VARCHAR(100) NOT NULL
-- )

-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- 1. Add the following items to the items table:
-- 		1 - Small Desk – 100 (ie. price)
-- 		2 - Large desk – 300
-- 		3 - Fan – 80

-- INSERT INTO items (item_name, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80)

-- 2. Add 5 new customers to the customers table:
-- 		1 - Greg - Jones
-- 		2 - Sandra - Jones
-- 		3 - Scott - Scott
-- 		4 - Trevor - Green
-- 		5 - Melanie - Johnson

-- INSERT INTO customers (customer_firstname, customer_lastname)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- 3. Use SQL to fetch the following data from the database:
-- 		1. All the items.

-- SELECT * FROM items

-- 		2. All the items with a price above 80 (80 not included).

-- SELECT * FROM items WHERE item_price > 80

-- 		3. All the items with a price below 300. (300 included)

-- SELECT * FROM items WHERE item_price <= 300

-- 		4. All customers whose last name is ‘Smith’ (What will be your outcome?).

-- SELECT * FROM customers WHERE customer_lastname = 'Smith' 
			-- outcome is an empty table

-- 		5. All customers whose last name is ‘Jones’.

-- SELECT * FROM customers WHERE customer_lastname = 'Jones'

-- 		6. All customers whose firstname is not ‘Scott’.

-- SELECT * FROM customers WHERE customer_firstname != 'Scott'

