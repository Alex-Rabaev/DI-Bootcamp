-- CREATE TABLE actor (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL DEFAULT 0
-- )
-- SELECT ALL THE COLLUMS OF THE TABLE
-- SELECT * FROM actor

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES
-- ('Bradd', 'Pitt', '1965-05-28', 2),
-- ('Matt', 'Damon', '1976-08-10', 1)
-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Alan', 'Rickman', '1981-03-18', 1)
-- SELECT first_name, last_name FROM actor

-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina'
-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina' OR last_name = 'Cloony'
-- SELECT first_name, last_name FROM actor WHERE number_oscars >= 2

-- alphabetical order of the last_name
-- SELECT * FROM actor ORDER BY last_name ASC
-- SELECT * FROM actor ORDER BY last_name ASC, first_name DESC

-- finding oldest person of the list
-- SELECT * FROM actor ORDER BY date_birth ASC LIMIT 1

-- finding all persons borned after 1980
-- SELECT * FROM actor WHERE EXTRACT (YEAR from date_birth) >= 1980

-- select all actors that have 'a' in their name
-- SELECT * FROM actor WHERE first_name LIKE '%a%'

-- all 'a' and 'A'
-- SELECT * FROM actor WHERE first_name ILIKE '%A%'

-- updating the actor and return that was changed
-- UPDATE actor
-- SET last_name = 'Cloony'
-- WHERE actor_id = 1
-- RETURNING *

-- without WHERE updating everything
-- UPDATE actor
-- SET number_oscars = 3
-- RETURNING *

-- SELECT * FROM actor ORDER BY actor_id

-- DELETE FROM actor
-- WHERE actor_id = 5
-- RETURNING *

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Emma', 'Wotson', '1989-07-08', 1)

-- ADD A NEW COLUMN
-- ALTER TABLE actor ADD COLUMN salary INTEGER
-- ALTER TABLE actor ADD COLUMN nationality VARCHAR(200)

-- SELECT * FROM actor

-- UPDATE actor
-- SET salary = 1000000 * number_oscars
-- RETURNING *

-- UPDATE actor
-- SET salary = 500000
-- WHERE number_oscars = 0
-- RETURNING *

-- UPDATE actor
-- SET nationality = 'American'
-- WHERE actor_id IN (1, 2, 3)
-- RETURNING *

-- UPDATE actor
-- SET nationality = 'French'
-- WHERE actor_id NOT IN (1, 2, 3)
-- RETURNING *

-- SELECT * FROM actor

-- EXERCISES --

------- 1 -------

-- 1. The first 4 actors

-- SELECT * FROM actor LIMIT 4

-- 2. The first 4 actors ordered in descending order of the last_name 
-- (ie. sorted DESCENDING by the "last_name" column)

-- SELECT * FROM actor ORDER BY last_name DESC LIMIT 4

-- 3. The actors that have the letter 'e' in their first_name

-- SELECT * FROM actor WHERE first_name ILIKE '%e%'

-- 4. The actors that got at least 5 oscars

-- UPDATE actor
-- SET number_oscars = 5
-- WHERE last_name = 'Rickman'
-- RETURNING *

-- SELECT * FROM actor WHERE number_oscars = 5

------- 2 -------

-- 1. Update the first name of Matt Damon to "Maty"

-- UPDATE actor
-- SET first_name = 'Maty'
-- WHERE first_name = 'Matt'
-- RETURNING *

-- 2. Update the number of oscars of George Clooney to 4, and return the updated record

-- UPDATE actor
-- SET number_oscars = 4
-- WHERE first_name = 'George' AND last_name = 'Cloony'
-- RETURNING *

-- 3. Rename the 'age' column by 'birthdate'

-- ALTER TABLE actor RENAME COLUMN date_birth TO birthdate

-- 4. Delete one actor and return it

-- DELETE FROM actor
-- WHERE actor_id = 6
-- RETURNING *

-- SELECT * FROM actor ORDER BY actor_id ASC





-- Daily Challenge : Actors

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.

-- SELECT COUNT(*) FROM actor
-- Outcome: 6

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

-- INSERT INTO actor (first_name, last_name)
-- VALUES ('Gary', 'Oldman')

-- Outcome:
-- ERROR: Failing row contains (9, Gary, Oldman, null, 0, null, null).null value in column "birthdate" of relation "actor" violates not-null constraint 
-- ERROR:  null value in column "birthdate" of relation "actor" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (9, Gary, Oldman, null, 0, null, null).



