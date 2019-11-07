//1------------------------------------------------------------------------------------------------
CREATE DATABASE bigdata_ca1_zeyan_liow;

\c bigdata_ca1_zeyan_liow;

CREATE TABLE movies(
	id SERIAL PRIMARY KEY,
	title TEXT,
	writer TEXT,
	year SMALLINT,
	actors TEXT[],
	franchise TEXT,
	synopsis TEXT
);

//2-----------------------------------------------------------------------------

INSERT INTO movies (title,writer,year,actors) 
	VALUES ('Fight Club', 'Chuck Palahniuk', 1999, '{Brad Pitt,Edward Norton}');

INSERT INTO movies (title,writer,year,actors) 
	VALUES ('Pulp Fiction', 'Quentin Tarantino', 1994, '{John Travolta,Uma Thurman}');

INSERT INTO movies (title,writer,year,actors) 
	VALUES ('Inglorious Basterds', 'Quentin Tarantino', 2009, '{Brad Pitt,Diane Kruger,Eli Roth}');


INSERT INTO movies (title,writer,year,franchise) 
	VALUES ('The Hobbit: An Unexpected Journey', 'J.R.R. Tolkein', 2012, 'The Hobbit');

INSERT INTO movies (title,writer,year,franchise) 
	VALUES ('The Hobbit: The Desolation of Smaug', 'J.R.R. Tolkein', 2013, 'The Hobbit');

INSERT INTO movies (title,writer,year,franchise,synopsis) 
	VALUES ('The Hobbit: The Battle of the Five Armies', 'J.R.R. Tolkein', 2012, 'The Hobbit', 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.');

INSERT INTO movies (title) 
	VALUES ('Pee Wee Herman''s Big Adventure');

INSERT INTO movies (title) 
	VALUES ('Avatar');

//3------------------------------------------------------------------------------

SELECT * FROM movies;

SELECT * FROM movies where writer = 'Quentin Tarantino';

//https://lerner.co.il/2014/05/22/looking-postgresql-arrays/
SELECT * FROM movies where 'Brad Pitt'= ANY(actors);

SELECT * FROM movies WHERE franchise = 'The Hobbit';

SELECT * FROM movies WHERE (year > 1989) AND (year < 2000);

SELECT * FROM movies WHERE (year < 2000) OR (year > 2010);

//4--------------------------------------------------------------------------------

UPDATE movies SET synopsis = 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
	WHERE title = 'The Hobbit: An Unexpected Journey';

UPDATE movies SET synopsis = 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
	WHERE title = 'The Hobbit: The Desolation of Smaug';

//https://makandracards.com/makandra/36097-postgresql-how-to-add-remove-modify-array-values-and-how-to-replace-1-value-with-multiple-values
UPDATE movies SET actors = array_cat(actors,'{Samuel L. Jackson}')
	WHERE title = 'Pulp Fiction';


//5--------------------------------------------------------------------------------------

SELECT * FROM movies WHERE synopsis LIKE '%Bilbo%';

SELECT * FROM movies WHERE synopsis LIKE '%Gandalf%';

SELECT * FROM movies WHERE (synopsis LIKE '%Bilbo%') AND (synopsis NOT LIKE '%Gandalf%');



//6-------------------------------------------------------------------------------------------

DELETE FROM movies where title = 'Pee Wee Herman''s Big Adventure';

DELETE FROM movies where title = 'Avatar';



