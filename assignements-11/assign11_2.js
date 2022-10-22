// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.

let n1 = prompt("Enter the number of elements in array1");
let inputArray1 = [];
for(let i=0;i<n1;i++)
{
inputArray1[i] = prompt('Enter array Element ' + (i+1));
}

let n2 = prompt("Enter the number of elements array2");
let inputArray2 = [];
for(let i=0;i<n2;i++)
{
inputArray2[i] = prompt('Enter array Element ' + (i+1));
}

let isArrayOneHas4 = inputArray1.filter((a)=>Number(a)===4).length > 0;
let isArrayTwoHas4 = inputArray2.filter((a)=>Number(a)===4).length > 0;

if(isArrayOneHas4 && isArrayTwoHas4)
console.log('4 in both arrays');
else if(isArrayOneHas4)
console.log('4 in array 1');
else if(isArrayTwoHas4)
console.log('4 in array 2');

