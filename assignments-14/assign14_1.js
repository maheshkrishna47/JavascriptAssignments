// 1. Write a JavaScript program to:
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000

let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }];

let itEmployees = employees.filter((obj)=> obj.department === 'IT');
console.log(itEmployees);

let salaryFilter = employees.filter((obj)=> obj.Salary < 65000);
console.log(salaryFilter);