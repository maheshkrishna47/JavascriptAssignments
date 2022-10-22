// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();
// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]

let deepArr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
function flatten(array) {
    return array.reduce(
      (accumulator, item) => {
        if (Array.isArray(item)) {
          return [...accumulator, ...item]; //spread if the item is array
        }
        return [...accumulator, item];
      }
    , []); //initial value of accumulator
  }

console.log(flatten(flatten(deepArr)));  
  