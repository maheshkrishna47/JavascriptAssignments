// 2. Iterate over all the characters of the word “iNeuron”.

   word = "iNeuron";
  let itr = word[Symbol.iterator]();
  let isDone = false;
  while (!isDone) {
    let next = itr.next();
    isDone = next.done;
    if (!isDone) console.log(next.value);
  }