// Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14

isSpecialNumber(145);
isSpecialNumber(150);

function factorial(num)
{
    if(num === 1 || num ===0)
    return 1;
    else
    return num * factorial(num - 1 );
}

function isSpecialNumber(num)
{
    let digits = Array.from(String(num),num => Number(num));

    let sum = 0;
    for(let digit of digits)
    {
        sum = sum + (factorial(digit));
    }
    
    if(sum === num)
    {
        console.log(num, 'is a special number');
    }
    else
    {
        console.log(num, 'is not a special number');
    }

  
}