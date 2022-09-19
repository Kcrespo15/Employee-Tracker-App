INSERT INTO department (id, department)
VALUES (1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 150000, 1),
(2, "Salesperson", 100000, 1),
(3, "Lead Engineer", 200000, 2),
(4, "Software Engineer", 150000, 2),
(5, "Account Manager", 125000, 3),
(6, "Accountant", 100000, 3),
(7, "Legal Team Lead", 300000, 4),
(8, "Lawyer", 175000, 4);

-- entire manager_id column is populating as null
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Nick", "James", 1),
(2, "John", "Smith", 2),
(3, "Tom", "Brady", 3),
(4, "Jimmy", "Hoffa", 4),
(5, "Jerry", "Les", 5),
(6, "Lucy", "Joe", 6),
(7, "Sam", "Munoz", 7),
(8, "Rick", "Cousins", 8);