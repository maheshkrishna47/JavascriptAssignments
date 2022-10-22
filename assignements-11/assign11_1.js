// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places

let n = prompt("Enter the number of elements");
let inputArray = [];
for(let i=0;i<n;i++)
{
inputArray[i] = prompt('Enter array Element ' + (i+1));
}

let sumOddPlace = 0;
let sumEvenPlace = 0;
let oddElemets = 0;
let evenElements = 0;
for(let i = 0;i < inputArray.length;i++ )
 {
     if(i%2 === 0)
     {
        sumOddPlace = sumOddPlace + Number(inputArray[i]);
        oddElemets++;
     }
     else
     {
        sumEvenPlace = sumEvenPlace + Number(inputArray[i]);
        evenElements++; 
     }
     
 }
 console.log('Sum of Numbers at Odd Places=',sumOddPlace);
 console.log('Sum of Numbers at Even Places=',sumEvenPlace);
 console.log('Difference=',sumOddPlace-sumEvenPlace);
 console.log('Odd Elements=',oddElemets);
 console.log('Even Elements=',evenElements);
 console.log('Average=',(sumOddPlace+sumEvenPlace)/inputArray.length);

 function gcdTwoNumbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  console.log('GCD=',gcdTwoNumbers(sumOddPlace,sumEvenPlace));