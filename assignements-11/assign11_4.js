// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
// Sample Input:
// [ 1, 2, 3, 2, 3, 4, 5 ]
// Output:
// Duplicate Elements = [ 2, 3 ]
// Array without duplicate elements = [ 1, 2, 3, 4, 5 ]

let n = prompt("Enter the number of elements in array");
let inputArray = [];
for(let i=0;i<n;i++)
{
    inputArray[i] = prompt('Enter array Element ' + (i+1));
}


let set = new Set();
let duplicateElementSet = new Set();
for(let i=0;i<inputArray.length;i++)
{
    if(set.has(inputArray[i]))
    {
        duplicateElementSet.add(inputArray[i]);
    }
    else
    {
        set.add(inputArray[i]);
    }
}

console.log('Array without duplicate elements  ='+ Array.from(set));
console.log('Duplicate Elements = '+ Array.from(duplicateElementSet));

