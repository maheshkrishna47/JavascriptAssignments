// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Take input from the user in the function parameter and return the output
// using the return statement.

// examples-
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

console.log('Number of matchsticks required for 1 house is',matchHouses(1));
console.log('Number of matchsticks required for 4 house is',matchHouses(4));
console.log('Number of matchsticks required for 87 house is',matchHouses(87));

function matchHouses(noOfHouses)
{
    return noOfHouses * 5 + 1;
}