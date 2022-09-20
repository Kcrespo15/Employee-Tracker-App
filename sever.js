// INSTALL DEPENDENCIES
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

// CREATING CONNECTION TO SERVER
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "eemployee_trackerdb"
  });
