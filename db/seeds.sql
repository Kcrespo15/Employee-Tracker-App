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
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Nick", "James", null, 1),
("John", "Smith", null, 2),
("Tom", "Brady", null, 3),
("Jimmy", "Hoffa", 1, 4),
("Jerry", "Les", 4, 5),
("Lucy", "Joe", 1, 6),
("Sam", "Munoz", 2, 7),
("Rick", "Cousins", 4, 8);