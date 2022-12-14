// INSTALL DEPENDENCIES

const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// CREATING CONNECTION TO SERVER

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_trackerdb"
  });

  // ESTABLISHED CONNECTION TO SERVER MAIN DISPLAY ON TERMINAL

  connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    init();
});

// INITIAL PROMPTS & SWITCH CASE

function init() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View All Employees", 
              "View All Employee's By Roles",
              "View all Employees By Departments", 
              "Update Employee",
              "Add Employee",
              "Add Role",
              "Add Department"
            ]
    }

    ]).then(function(val) {
        switch (val.choice) {
            case "View All Employees":
              viewAllEmployees();
            break;
    
          case "View All Employee's By Roles":
              viewAllRoles();
            break;

          case "View all Employees By Departments":
              viewAllDepartments();
            break;
          
          case "Add Employee":
                addEmployee();
              break;

          case "Update Employee":
                updateEmployee();
              break;
      
            case "Add Role":
                addRole();
              break;
      
            case "Add Department":
                addDepartment();
              break;
    
            }
    })
};

// View All Employees

function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      init()
  })
};

// View All Roles

function viewAllRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    init()
    })
  };

//  View All Employees By Departments

function viewAllDepartments() {
    connection.query("SELECT employee.first_name, employee.last_name, department.department AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      init()
    })
  };


//  Select Role Quieries : Employee

var roleArray = [];

function selectRole() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roleArray.push(res[i].title);
    }

  })
  return roleArray;
};

// Select Manager Quieries

var managersArray = [];

function selectManager() {
  connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      managersArray.push(res[i].first_name);
    }

  })
  return managersArray;

};

// Add Employee

function addEmployee() { 
    inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter their first name "
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter their last name "
        },
        {
          name: "role",
          type: "list",
          message: "What is their role? ",
          choices: selectRole()
        },
        {
            name: "choice",
            type: "rawlist",
            message: "Whats their managers name?",
            choices: selectManager()
        }
    ]).then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1
      var managerId = selectManager().indexOf(val.choice) + 1
      connection.query("INSERT INTO employee SET ?", 
      {
          first_name: val.firstName,
          last_name: val.lastName,
          manager_id: managerId,
          role_id: roleId
          
      }, function(err){
          if (err) throw err
          console.table(val)
          init()
      })

  })
};

//  Update Employee 
const updateEmployee = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is your employee ID?",
      },
      {
        name: "role",
        type: "input",
        message: "What is your role ID?",
      },
    ])
    .then((answers) => {
      const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
      connection.query(query, [answers.id, answers.role], (err, results) => {
        if (err) throw err;
        console.log(results);
        init();
      });
    })
    .catch((err) => {
      throw err;
    });
};

function addRole() { 
    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role;",   function(err, res) {
      inquirer.prompt([
          {
            name: "Title",
            type: "input",
            message: "What is the roles Title?"
          },
          {
            name: "Salary",
            type: "input",
            message: "What is the Salary?"
  
          } 
      ]).then(function(res) {
          connection.query(
              "INSERT INTO role SET ?",
              {
                title: res.Title,
                salary: res.Salary,
              },
              function(err) {
                  if (err) throw err
                  console.table(res);
                  init();
              }
          )
  
      });
    });
    }

    // Add Department

    function addDepartment() { 

        inquirer.prompt([
            {
              name: "name",
              type: "input",
              message: "What Department would you like to add?"
            }
        ]).then(function(res) {
          connection.query(
                "INSERT INTO department SET ?",
                {
                  department: res.name
                
                },
                function(err) {
                    if (err) throw err
                    console.table(res);
                    init();
                }
            )
        })
      }
    