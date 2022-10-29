// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - ['a', 'b', 'c', 'd']
// Array 2 - ['e', 'f', 'g', 'h', 'a', 'i', 'j']


  let arr1 = ['a', 'b', 'c', 'd'];
  let arr2 = ['e', 'f', 'g', 'h', 'a', 'i', 'j'];
  let itr = arr1[Symbol.iterator]();
  let isDone = false;
  while (!isDone) {
    let next = itr.next();
    isDone = next.done;
    if (!isDone) 
    {
        if(arr2.toString().match(next.value))
        {
            console.log('Matched element =', next.value);
        }
    }
  }