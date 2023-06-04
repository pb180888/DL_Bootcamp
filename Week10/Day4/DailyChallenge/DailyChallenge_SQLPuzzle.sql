-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- Queries

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

-- response
-- id       name
-- 5        Pawan
-- 6        Sharlee
-- 7        Kriss
-- NULL     Avtaar
-- //////////////////
-- //////////////////
-- //////////////////

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- select * from SecondTab

-- response 
-- id
-- 5
-- NULL

-- //////////////////
-- //////////////////
-- //////////////////


-- Questions

-- 1.What will be the OUTPUT of the following statement?
--  SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- response - 0
-- 2.What will be the OUTPUT of the following statement?
--  SELECT COUNT(*) 
--  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--  resonse - 2
-- 3.  What will be the OUTPUT of the following statement?
--   SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- 	response - 0
-- 4. What will be the OUTPUT of the following statement?
--   SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- response 2