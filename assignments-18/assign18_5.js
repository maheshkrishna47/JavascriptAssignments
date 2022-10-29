// 5. Print an infinite series of natural numbers using a generator.
function* generator() 
{
  let num = 1; 
  while(true)
  {
    yield num++;
  }
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
