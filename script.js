// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {

  // TODO: Get user input to create and return an array of employee objects
 let employees = []; // Array to store employee objects
 let continueAdding = true; // Flag to control the input loop

while (continueAdding) {
  //Prompt for user to add some employee details
 const firstName = prompt("Enter First Name");
 const lastName = prompt("Enter Last Name");
 const salary = parseFloat(prompt("Enter Salary"));

// The employee object for the input data
 const employee ={
  firstName: firstName,
  lastName: lastName,
  salary: salary,
 };

 // Adding the employee object to the employees array
 employees.push(employee);

 // Prompt to ask the user if they would like to add another employee
 continueAdding = confirm("Would you like to add another employee?");
}

return employees; // Returns the employees araay
} 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let sum = 0; // Variable to hold the sum of all the salaries

// Loop through the employees array to calculate the sum of the salaries
for (let i = 0; i < employeesArray.length; i++) {
sum+=employeesArray[i].salary;
}

//Calculate the average salary
const average =sum/employeesArray.length;

// Displays the average salary of the employees in the console
console.log(`The average salary of our employees is $${average.toFixed(2)}`);
return average;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Generates a random index based on the length of the employees array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // Gets the random employee object using the random index
  const randomEmployee = employeesArray[randomIndex];
  // Displays the random employee in the console
  console.log(`This weeks random employee winner is ${randomEmployee.firstName} ${randomEmployee.lastName}!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
