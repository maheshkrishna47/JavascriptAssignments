// 4. Create a generator for multiplying?

function* generator(num1,num2) {
  yield num1 * num2;
  yield num1 + num2;
}

const gen = generator(10,20);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);