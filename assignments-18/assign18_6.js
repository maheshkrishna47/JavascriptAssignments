// 6. Create a generator that can throw an exception.

function* generator() {
    try {
      yield 1;
      yield 2;
      throw new Error('Error');
      yield 3; //Unreachable
    } catch (e) {
      console.log(e);
    }
}

var g = generator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());