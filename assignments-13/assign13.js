// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3


let n = prompt("Enter the number of elements in array");
let inputArray = [];
for(let i=0;i<n;i++)
{
inputArray[i] = prompt('Enter array Element ' + (i+1));
}

let sum = inputArray.reduce((acc,value)=>acc+Number(value),0);
console.log(sum);
let avg = sum/n;
console.log(avg);

// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.
// Sample Input:
// let students = [
// { name: "John", marks: “92” },
// { name: "Oliver", marks: “85” },
// { name: "Michael", marks: “79” },
// { name: "Dwight", marks: “95”},
// { name: "Oscar", marks: “64” },
// { name: "Kevin", marks: “48” },
// ];
// Output:

// {
// 'A': [ { name: "John", grade: “A” },
// { name: "Dwight", grade: “A” } ],
// 'B': [ { name: "Oliver", grade: “B” } ],
// 'C': [ { name: "Michael", grade: “C” } ],
// 'D': [ { name: "Oscar", grade: “D” } ],
// 'E': [ ],
// 'F': [ { name: "Kevin", grade: “F” } ],
// }

let students = [
{ name: "John", marks: 92 },
{ name: "Oliver", marks: 85 },
{ name: "Michael", marks: 79 },
{ name: "Dwight", marks: 95},
{ name: "Oscar", marks: 64 },
{ name: "Kevin", marks: 48 },
];

function getGrade(marks)
{
    if(marks>90)
    {
       return 'A';
    }
    else if(marks>80)
    {
       return 'B';
    }
    else if(marks>70)
    {
       return 'C';
    }
    else if(marks>60)
    {
       return 'D';
    }
    else if(marks>50)
    {
       return 'E';
    }
    else
    {
       return 'F';
    }
}

let map = new Map();

for(let student of students)
{
    let grade = getGrade(student.marks);
    student['grade'] = grade;

    let studentArr = [student];
    if(map.has(grade))
    studentArr =  [student, ...map.get(grade)];

    map.set(grade,studentArr)
}

console.log(map)