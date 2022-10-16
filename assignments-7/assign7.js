// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

console.log(truncateString('Ice'));
console.log(truncateString('Icecream'));
function truncateString(s)
{  
    if(s.length>4)
    { 
        return s.substring(0,4);
    }
    return(s);
}

// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”
console.log(removeWhiteSpaces('Hii Boy'));
function removeWhiteSpaces(s)
{  
    return s.replace(' ','');
}


// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”
console.log(replaceFirstWordWithSecond('Hii Boy'));
function replaceFirstWordWithSecond(s)
{  
    let splitArr = s.split(' ');
    return splitArr[1] + ' ' + splitArr[0];
}


// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”
console.log(replaceAwithX('apple'));
function replaceAwithX(s)
{  
    return s.replace('a','x');
}


// 5. What string method can be used to convert string into array ?

//split

// 6. What string method can be used to check the occurrence of a specified
// text in a string?

// search,include,match

// 7. How can you break a string to a newline in Javascript ?

// \n

// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.
console.log(isFirstCharLowerCase('apple'));
console.log(isFirstCharLowerCase('Apple'));
function isFirstCharLowerCase(s)
{  
    if(s.charCodeAt(0) > 96) return true;
    else return false;
}

// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

// convert to Uppercase and compare with "YES"


// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.

// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string
fun('hello')
function fun(s)
{  
    // a) Convert the String into upper case.
  console.log(s.toUpperCase());

  // b) Convert only the first character to uppercase.
  let firstChar =  s.substring(0,1);
  console.log(firstChar.toUpperCase()+s.substring(1,s.length));

  // c) Convert the String into lower case.
  console.log(s.toLowerCase());

  // d) Break the string into two halves and swap them.
  console.log(s.substring(s.length/2,s.length)+s.substring(0,s.length/2));

  // e) Count the repeating characters.
  let result = {};
  let charArr = s.split("");
  for(let ch of charArr )
  {
      if(result[ch])
      { 
        result[ch] = result[ch] + 1;
      }
      else
      result[ch] = 1;
  }
 console.log(result);  

  // f) Reverse the string
   console.log(s.split("").reverse().join(""));
}