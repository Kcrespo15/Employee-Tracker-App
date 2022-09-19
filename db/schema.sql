-- Create database
DROP DATABASE IF EXISTS employee_trackerdb;
CREATE database employee_trackerdb;

USE employee_trackerdb;

-- create deparment table
CREATE TABLE department(
    id INT PRIMARY KEY,
    department VARCHAR(30)
);

-- deparment table
CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- employee role table
CREATE TABLE employee(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);

