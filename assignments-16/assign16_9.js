// 9). Create a function that takes an array of numbers and returns
// "Boom!" if the digit 7 appears in the array. Otherwise, return "there is
// no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

function sevenBoom(arr)
{
    return arr.toString().match('7') ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
