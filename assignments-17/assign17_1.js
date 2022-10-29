// 1. Create a function to iterate over the following list ["John",
// "Rohn", "Danny", "James"]

function iterate(arr) {
  let itr = arr[Symbol.iterator]();
  let isDone = false;
  while (!isDone) {
    let next = itr.next();
    isDone = next.done;
    if (!isDone) console.log(next.value);
  }
}

iterate(["John", "Rohn", "Danny", "James"]);
