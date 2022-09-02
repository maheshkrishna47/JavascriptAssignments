// Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000
let sumOfMultiplesOf3 = 0;
for(let i=3;i<1000;i=i+3)
{
    sumOfMultiplesOf3 = sumOfMultiplesOf3 + i;
}

let sumOfMultiplesOf5 = 0;
for(let i=5;i<1000;i=i+5)
{
    sumOfMultiplesOf5 = sumOfMultiplesOf5 + i;
}
console.log('Sum of multiples of 3 is ',sumOfMultiplesOf3);
console.log('Sum of multiples of 5 is ',sumOfMultiplesOf5);
console.log('Sum of multiples of 3 and 5 is ',sumOfMultiplesOf3+sumOfMultiplesOf5);