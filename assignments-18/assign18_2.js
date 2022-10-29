// 2. What is the syntax of a generator?

// Syntax
// function* name(param0) {
//   statements
// }

// Example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);