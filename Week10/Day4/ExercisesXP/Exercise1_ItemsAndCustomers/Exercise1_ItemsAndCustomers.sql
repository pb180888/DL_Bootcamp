-- Database: public

-- DROP DATABASE IF EXISTS public;
-- Exercise 1 : Items And Customers
-- 1. All items, ordered by price (lowest to highest).
-- select * from items order by item_price asc;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- select * from items where item_price > '80' order by item_price desc;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- select first_name,last_name from customers order by first_name asc limit 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- select last_name from customers order by last_name desc;

