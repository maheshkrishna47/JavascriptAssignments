// 6). Create a function that takes a word and returns true if the word
// has two consecutive identical letters.
// Examples
// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true

function doubleLetters(str)
{
   return str.match('([a-zA-Z0-9])\\1+') ? true : false;
}

console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
console.log(doubleLetters("hi"));
