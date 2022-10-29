// 5. What are the different ways of iterating through an array?
// demonstrate them.

console.log('using iterator');
  let arr = ["John", "Rohn", "Danny", "James"];
  let itr = arr[Symbol.iterator]();
  let isDone = false;
  while (!isDone) {
    let next = itr.next();
    isDone = next.done;
    if (!isDone) console.log(next.value);
  }


console.log('using for loop')
for(let i=0; i<arr.length;i++)
{
    console.log(arr[i]);
}

console.log("using for of loop");
for (let name of arr) {
  console.log(name);
}

console.log("using while loop");
let index = 0;
while (arr.length>index) {
  console.log(arr[index]);
  index++;
}

console.log("using do while loop");
let ind = 0;
do{
  console.log(arr[ind]);
  ind++;
}
while(arr.length > ind);