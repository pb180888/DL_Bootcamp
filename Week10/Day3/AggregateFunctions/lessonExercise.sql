-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- -- Get the average number of oscars in the table
-- select * from actors;
-- select avg(number_oscars) from actors; 
-- Get distinct actors depending on their number of oscars
-- select  distinct number_oscars from actors;
-- Get the actors born after 01/01/1970
-- select * from actors where birthdate > '01/01/1970' order by birthdate asc
-- Get the actors which names are 'David', 'Morgan' or 'Will'
select * from actors where first_name in('Maty', 'Morgan','Will');