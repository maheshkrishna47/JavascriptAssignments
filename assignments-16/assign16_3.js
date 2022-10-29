// 3). Write a regular expression that matches only a prime number.
// Numbers will be presented as strings.
// Example
// “7” ➞ true
// “134” ➞ false

function isPrime(str)
{
    charArr = [];
    for(let i=0;i<Number(str);i++)
    {
        charArr.push('1');
    }
    let unaryStr = charArr.toString().replaceAll(',','');
    let matches = unaryStr.match('^1?$|^(11+?)\\1+$');
    return matches ? false:true;

}

console.log(isPrime('7'));
console.log(isPrime('134'));
console.log(isPrime('5'));
console.log(isPrime('1'));
console.log(isPrime('0'));