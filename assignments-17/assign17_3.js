// 3. Create a functional iterator, with a next function.

  let a = "Mahesh";
  let itr = a[Symbol.iterator]();
  let isDone = false;
  while (!isDone) {
    let next = itr.next();
    isDone = next.done;
    if (!isDone) console.log(next.value);
  }