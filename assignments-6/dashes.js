// Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

console.log(insertDashes(25468));
console.log(insertDashes(1000567786));

function insertDashes(num)
{
    let digitsArray = Array.from(String(num),num => Number(num));
    let result = '';
    for(let index in digitsArray)
    {
        if(index === 0 )
        {
            result = result + digitsArray[index];
            continue;
        }
        if(digitsArray[index]%2 === 0 && digitsArray[index-1]%2===0 )
        {
            result = result + '-' +digitsArray[index];            
        }
        else
        {
            result = result + digitsArray[index];            
        }
    }
    return result;   
}