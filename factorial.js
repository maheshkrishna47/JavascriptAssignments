// Write a program to find the factorial of a number.
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

function factorial(number)
{
    if(number === 1)
        return 1;
    else
        return number * factorial(number - 1);
}