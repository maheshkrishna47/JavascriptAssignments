// 10). Create a function that takes a string, checks if it has the same
// number of x's and o's and returns either true or false.

// ● Return a boolean value (true or false).
// ● Return true if the amount of x's and o's are the same.
// ● Return false if they aren't the same amount.
// ● The string can contain any character.
// ● When "x" and "o" are not in the string, return true.
// Examples
// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true
// // Case insensitive.
// Notes
// ● Remember to return true if there aren't any x's or o's.
// ● Must be case insensitive.

function XO(str)
{
    let xCount = str.match(/x|X/g) ? str.match(/x|X/g).length : 0;
    let oCount = str.match(/o|O/g) ? str.match(/o|O/g).length : 0;
    return xCount === oCount ? true : false;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));