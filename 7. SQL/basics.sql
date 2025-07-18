-- SQL is case insensitive

-- DATABASES

-- Creation
CREATE DATABASE college;
CREATE DATABASE IF NOT EXISTS college;

-- Selection
USE college;

-- Deletion
-- DROP DATABASE college;
DROP DATABASE IF EXISTS college;

-- List of databases
SHOW DATABASES;

-- Show current database
SELECT DATABASE();

-- TABLES

-- Creation
CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE students (
    id INT PRIMARY KEY, -- column_name, type, constraint
    name VARCHAR(50),
    age INT CHECK (age BETWEEN 18 AND 30),
    t_id INT FOREIGN KEY (t_id) REFERENCES teacher(id)
);

-- Constraints:
-- PRIMARY KEY (unique and not null - only one for a table)
-- UNIQUE (all values are different)
-- NOT NULL (cannot have null as value)
-- FOREIGN KEY (reference another table)

-- List of tables
SHOW TABLES;

-- INSERTION
INSERT INTO teacher (id, name) VALUES
(1, 'Mr. Anderson'),
(2, 'Ms. Carter'),
(3, 'Dr. Lee');

INSERT INTO students VALUES
(1, 'John Doe', 20, 1),
(2, 'Jane Smith', 19, 2),
(3, 'Michael Johnson', 21, 3),
(4, 'Emily Davis', 22, 1),
(5, 'Daniel Wilson', 20, 2),
(6, 'Olivia Brown', 18, 3),
(7, 'James Taylor', 23, 1),
(8, 'Sophia Martinez', 21, 2),
(9, 'William Anderson', 22, 3),
(10, 'Ava Thomas', 19, 1);

-- SELECTION
SELECT * FROM students; -- all rows and columns
SELECT * FROM students WHERE name IN ('John Doe', 'Jane Smith'); -- multiple values
SELECT * FROM students WHERE age > 18 AND age < 25; -- AND condition
SELECT * FROM students WHERE age BETWEEN 18 AND 25; -- with range
SELECT * FROM students ORDER BY age DESC; -- order by (asc/desc)
SELECT id, name FROM students; -- select specific columns
SELECT id AS id FROM students; -- aliasing
SELECT * FROM students LIMIT 5; -- only first 5 records
SELECT DISTINCT * FROM students; -- remove duplicate records

--aggregate functions
SELECT AVG(age) FROM students; -- average age
SELECT MAX(age) FROM students; -- maximum age
SELECT MIN(age) FROM students; -- minimum age
SELECT SUM(age) FROM students; -- sum of ages
SELECT COUNT(*) FROM students; -- count rows

-- group by
SELECT count(*) AS total_students, age FROM students GROUP BY age; -- count students by age
SELECT age, COUNT(*) AS total_students FROM students GROUP BY age HAVING COUNT(*) > 1; -- count students by age with condition

--general order
--SELECT columns FROM table WHERE contition GROUP BY column HAVING condition ORDER BY column ASC/DESC;

-- UPDATION
UPDATE students SET t_id = 3 WHERE age = 21;

-- DELETION
DELETE FROM students WHERE age < 20;

-- ALTER
ALTER TABLE students ADD COLUMN email VARCHAR(100); -- add column
ALTER TABLE students DROP COLUMN email; -- drop column
ALTER TABLE students MODIFY COLUMN age INT NOT NULL; -- modify column type or constraint
ALTER TABLE students CHANGE COLUMN age student_age INT; -- change column name and type
ALTER TABLE students RENAME COLUMN t_id TO teacher_id; -- rename column
ALTER TABLE students RENAME TO pupils; -- rename table

-- TRUNCATE
-- TRUNCATE TABLE pupils; -- remove all records but keep structure

-- JOINS
SELECT s.id, s.name, t.name AS teacher_name FROM students s INNER JOIN teacher t ON s.teacher_id = t.id; -- Only students with matching teacher
SELECT s.id, s.name, t.name AS teacher_name FROM students s LEFT JOIN teacher t ON s.teacher_id = t.id; -- All students, matched teachers if any
SELECT s.id, s.name, t.name AS teacher_name FROM students s RIGHT JOIN teacher t ON s.teacher_id = t.id; -- All teachers, matched students if any
SELECT s.id, s.name, t.name AS teacher_name FROM students s FULL OUTER JOIN teacher t ON s.teacher_id = t.id; -- All students and all teachers, matched or not
SELECT s.name, t.name AS teacher_name FROM students s CROSS JOIN teacher t; -- Cartesian product of students and teachers