// Write a javascript function find_largest to return the nth largest number

// in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]

// find_largest(3) will return third largest number from the above array -
// which is 8.

console.log(find_largest(3));

function find_largest(n)
{
    let array = [3,45,6,7,23,5,7,8];
    let sortedArrayDesc = array.sort((a, b) =>  b - a);
    // console.log(sortedArrayDesc);
    return sortedArrayDesc[n-1]; 
}