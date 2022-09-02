// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

prime(1,100);

function prime(rangeStart,rangeEnd)
{
    for(let i = rangeStart;i<=rangeEnd;i++)
    {
        let isPrime = true;
        for(let j=2;j<=i/2;j++)
        {
            if(i % j === 0 )
            {
                isPrime=false; 
                break;
            }
        }
        if(isPrime && i>1)
        {
            console.log('factorial of prime number ',i,'is ',factorial(i));
        }
    }   
}

function factorial(num)
{
    if(num === 1)
    return 1;
    else
    return num * factorial(num - 1 );
}