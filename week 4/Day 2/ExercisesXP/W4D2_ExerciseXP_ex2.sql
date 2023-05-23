-- Exercise 2 : Dvdrental Database

-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.

-- SELECT * FROM customer

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.

-- SELECT first_name || ' ' || last_name AS full_name FROM customer

-- 3. Lets get all the dates that accounts were created. 
-- 	  Write a query to select all the create_date from the “customer” table (there should be no duplicates).

-- SELECT DISTINCT create_date FROM customer

-- 4. Write a query to get all the customer details from the customer table, 
--    it should be displayed in descending order by their first name.

-- SELECT * FROM customer ORDER BY first_name DESC

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in 
-- 	  ascending order according to their rental rate.

-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

-- 6. Write a query to get the address, and the phone number of all customers living in the 
-- 	  Texas district, these details can be found in the “address” table.

-- SELECT address, phone FROM address WHERE district = 'Texas'

-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.

-- SELECT * FROM film WHERE film_id IN (15, 150)

-- 8. Write a query which should check if your favorite movie exists in the database. 
-- 	  Have your query get the film ID, title, description, length and the rental rate, 
-- 	  these details can be found in the “film” table.

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE description ILIKE '%mad scientist%'
-- or
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Forrest Gump'

-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. 
-- 	  Write a query to get the film ID, title, description, length and the rental 
-- 	  rate of all the movies starting with the two first letters of your favorite movie.

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Fo%'

-- 10. Write a query which will find the 10 cheapest movies.

-- SELECT film_id, title, description, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10

-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- 	   Bonus: Try to not use LIMIT.

-- SELECT film_id, title, description, rental_rate
-- FROM film
-- WHERE rental_rate NOT IN (
--     SELECT rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10
-- )
-- ORDER BY rental_rate ASC
-- LIMIT 10

-- 12. Write a query which will join the data in the customer table and the payment table. 
-- 	   You want to get the first name and last name from the curstomer table, as well as the 
-- 	   amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.

-- SELECT *
-- FROM film
-- WHERE film_id NOT IN (
--     SELECT film_id FROM inventory
-- )

-- 14. Write a query to find which city is in which country.

-- SELECT c.city, co.country
-- FROM city c
-- JOIN country co ON c.country_id = co.country_id

-- 15. Bonus You want to be able to see how your sellers have been doing? 
--     Write a query to get the customer’s id, names (first and last), 
-- 	   the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

-- SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY p.staff_id


