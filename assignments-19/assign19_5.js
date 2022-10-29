// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

console.log("start");
async function demo() {
  await delay();
  console.log("end");
}

demo();