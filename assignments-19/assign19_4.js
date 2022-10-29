console.log("start");
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("middle");
fn().then((res) => {
  console.log(res);
});

console.log("end");
// What is the output of this code snippet?

// start
// middle
// 1
// end
// success
