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

  // ESTABLISHED CONNECTION TO SERVER MAIN DISPLAY ON TERMINAL
  connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    init();
});

