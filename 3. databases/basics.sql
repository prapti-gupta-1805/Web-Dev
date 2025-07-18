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
    name VARCHAR(100)
);

CREATE TABLE students (
    id INT PRIMARY KEY, -- column_name, type, constraint
    name VARCHAR(50),
    age INT,
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