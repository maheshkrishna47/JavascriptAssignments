// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

// They are not same.
//The function which is passed as an argument to the other function is called as callback function.
// The function which takes function as argument is called as higher order function.  

// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// Yes. Because it takes function as argument.

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

// In the below example useFunction is higher order function
// 

// 4. Carefully check the example below:
// a) What will be the output of this program ?

// Hello John
// Hello Tina
// Hello Kale
// Hello Max

// b) Which function is a Higher Order function here ?

// useFunction is higher order function
// argFn is callback function

const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);