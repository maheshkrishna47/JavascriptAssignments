// 1. Write a JavaScript program to map Employee Records according to Employee
// IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
// Sample Input:
// "id": [ 67, 48, 29 ]
// "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
// "salary": [ 75000, 82000, 98000 ]
// Output:
// [ 67, 48, 29 ]
// 3
// 67: Hitanshu
// 48: Ninad
// 29: Amandeep
// [ 75000, 82000, 98000 ]
// 85000


let ids = [ 67, 48, 29 ];
let names = [ "Hitanshu", "Ninad", "Amandeep" ];
let salaries = [ 75000, 82000, 98000 ];

let empObjArray = [];
for(let i=0;i<ids.length;i++)
{
    let empObj = {};
    empObj.id = ids[i];
    empObj.name = names[i];
    empObj.salary = salaries[i];
    empObjArray.push(empObj);
}

console.log(empObjArray.map((obj)=>obj.id));
console.log(empObjArray.map((obj)=>obj.id).length);

for(let emp of empObjArray)
{
    console.log(emp.id +':'+emp.name);
}

let salaryArr = empObjArray.map((obj)=>obj.salary);
console.log(salaryArr);

let totalSalary = salaryArr.reduce((acc,value)=>acc+value,0);
let avgSalary = totalSalary/salaryArr.length;
console.log(avgSalary);