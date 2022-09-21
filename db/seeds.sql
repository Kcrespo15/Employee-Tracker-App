-- DEPARTMENT SEEDS 
INSERT INTO department (department)
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal");

-- EMPLOYEE ROLE SEEDS 
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 150000, 1),
("Salesperson", 100000, 1),
("Lead Engineer", 200000, 2),
("Software Engineer", 150000, 2),
("Account Manager", 125000, 3),
("Accountant", 100000, 3),
("Legal Team Lead", 300000, 4),
("Lawyer", 175000, 4);

-- EMPLOYEE SEEDS 
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Nick", "James", 1),
(2, "John", "Smith", 2),
(3, "Tom", "Brady", 3),
(4, "Jimmy", "Hoffa", 4),
(5, "Jerry", "Les", 5),
(6, "Lucy", "Joe", 6),
(7, "Sam", "Munoz", 7),
(8, "Rick", "Cousins", 8);