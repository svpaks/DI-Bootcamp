-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
-- ('Marc', 'Benichou', '1998-11-02'),
-- ('Yoan', 'Cohen', '2010-12-03'),
-- ('Lea', 'Benichou', '1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-03'),

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Svetlana', 'Paks', '1989-04-19')

-- SELECT * FROM students

-- SELECT first_name, last_name FROM students 

-- SELECT first_name, last_name FROM students WHERE student_id = 2

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%A%'

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'A%'

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%A'

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%A_'

-- SELECT first_name, last_name FROM students WHERE student_id = 1 OR student_id = 3

-- SELECT * FROM students WHERE birth_date >= '2000-01-01'
















