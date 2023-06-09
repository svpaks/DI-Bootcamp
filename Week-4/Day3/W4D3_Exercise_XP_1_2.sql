-- Exercise1

-- 1. Get a list of all film languages.
-- SELECT name FROM language JOIN Film ON film.language_id = language.language_id
-- OR
-- SELECT title, name FROM Film JOIN language ON language.language_id = film.language_id


-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. 
-- Try your query with different joins:
--    Get all films, even if they don’t have languages.
-- --    Get all languages, even if there are no films in those languages.
-- SELECT title, description, name FROM film JOIN language ON film.language_id = language.language_id
-- SELECT title, name FROM film LEFT JOIN language ON language.language_id = film.language_id
-- SELECT title, name FROM film RIGHT JOIN language ON language.language_id = film.language_id


-- -- 3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- 	newfilm_id INTEGER PRIMARY KEY,
-- 	newfilm_name VARCHAR(30) NOT NULL
-- )

-- INSERT INTO new_film (newfilm_id, newfilm_name) 
-- VALUES
-- (35, 'White Oleandr'),
-- (49, 'Avengers');


-- 4. Create a new table called customer_review, which will contain film reviews that customers will make.
--    Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--    It should have the following columns:
--    review_id – a primary key, non null, auto-increment.
--    film_id – references the new_film table. The film that is being reviewed.
--    language_id – references the language table. What language the review is in.
--    title – the title of the review.
--    score – the rating of the review (1-10).
--    review_text – the text of the review. No limit on the length.
--    last_update – when the review was last updated.

-- CREATE TABLE customer_review (
-- 	review_id SERIAL,
-- 	film_id INTEGER,
-- 	language_id INTEGER,
-- 	title VARCHAR(30) NOT NULL,
-- 	score INT NOT NULL DEFAULT 1,
-- 	review_text VARCHAR NOT NULL,
-- 	last_update DATE NOT NULL,
-- 	PRIMARY KEY (review_id),
-- 	FOREIGN KEY (film_id) REFERENCES new_film(newfilm_id) ON DELETE CASCADE,
-- 	FOREIGN KEY(language_id) REFERENCES language(language_id) ON DELETE CASCADE
-- )

-- OR

-- CREATE TABLE customer_review (
--   review_id SERIAL PRIMARY KEY,
--   film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
--   language_id INTEGER REFERENCES language(language_id),
--   title VARCHAR(30) NOT NULL,
--   score INTEGER (10) NOT NULL,
--   review_text TEXT NOT NULL,
--   last_update TIMESTAMP
-- )

-- 5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) 
-- VALUES
-- (35, 1, 'White Oleandr', 7, 'The carefree and happy Californian life of a young girl, Astrid, 
--  and her mother, Ingrid, ends with the arrival of the enigmatic Barry Kolker. 
--  Ingrid decides to poison Barry with a white oleander.', '01-05-2022'),
-- (49, 1, 'Avengers', 9, 'Under the leadership of Captain America, Iron Man, Thor, the Incredible Hulk, 
--  Hawkeye and Black Widow go to war with the invader.', '05-05-21');
 

-- 6. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film WHERE newfilm_name = 'White Oleandr'

-- SELECT * FROM customer_review





-- Exercise2

-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film 
-- SET language_id = 5 
-- WHERE film_id IN (35, 4, 12)

-- for me:
-- SELECT film_id, title, language_id FROM film
-- WHERE film_id IN (35, 4, 12)
-- for me:
-- SELECT film_id, title, film.language_id, name FROM film JOIN language ON film.language_id = language.language_id
-- WHERE film_id IN (35, 4, 12)


-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- store_id, address_id
-- the two measures must match the values in the related tables


-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- This is an easy step.

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT(*) AS outstanding FROM rental WHERE return_date IS NULL

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT rental_rate, title 
-- FROM film 
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON rental.inventory_id = inventory.inventory_id
-- WHERE return_date IS NULL
-- ORDER BY rental_rate DESC
-- LIMIT 30


-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. 
-- Can you help him find which movies he wants to rent?

--    The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE first_name ILIKE '%Penelope%' AND last_name ILIKE '%Monroe%' AND description ILIKE '%sumo%'

--    The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT title FROM film 
-- WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%'

--    The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT title FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE first_name ILIKE '%Matthew%' 
-- AND last_name ILIKE '%Mahan%' 
-- AND rental_rate > 4 
-- AND return_date BETWEEN '2005-07-28' AND '2005-08-01' 

--    The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT title FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE first_name ILIKE '%Matthew%' 
-- AND last_name ILIKE '%Mahan%'
-- AND (title ILIKE '%boat%' OR description ILIKE '%boat%')
-- ORDER BY rental_rate DESC LIMIT 1




