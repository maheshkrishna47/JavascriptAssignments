// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
 
// yes,its a closure.

// b) What is output of this program

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//output = 100

// 2. What is the difference between a closure and a scope ?
// Closure is the function with its lexical scope.
//scope is the availability of a variable.

// 3. What is a lexical scope and how is it related to closure?
//In javascipt inner function maintains memory space for outer function variables .Its considered as lexical scope.
// Closure is formed by the inner function with its lexical scopes .  

// 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}

// 3
// 3
// 3
// Since i value changes to 3 after the delay of 1000ms 