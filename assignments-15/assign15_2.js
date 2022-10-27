// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.


function rightShift(value,noOfShift)
{
    if(noOfShift === 1)
    return value/2;
    else
    return rightShift(value/2,--noOfShift);
}

console.log(rightShift(20,2));