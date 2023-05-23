-- Daily Challenge : SQL Puzzle

-- In this puzzle you have to go through all the SQL queries and provide us the output of the 
-- requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.


-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab]



-- Questions:


-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
	
-- OUTPUT will be 0


-- Q2. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- OUTPUT will be 2


-- Q3. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- OUTPUT will be 0

-- Q4. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- OUTPUT will be 2
