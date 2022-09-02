// Write a program to find whether a given number is armstrong number or

// not-
// The Armstrong number is a number that is equal to the sum of cubes of

// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153


isArmStrongNumber(153);
isArmStrongNumber(299);

function isArmStrongNumber(num)
{
    let digits = Array.from(String(num),num => Number(num));

    let sum = 0;
    for(let digit of digits)
    {
        sum = sum + (digit * digit * digit);
    }
    
    if(sum === num)
    {
        console.log(num, 'is a Armstrong number');
    }
    else
    {
        console.log(num, 'is not a Armstrong number');
    }

  
}

 
