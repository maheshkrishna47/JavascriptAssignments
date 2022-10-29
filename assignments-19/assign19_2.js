// 2). Write a sleep function using a promise in javascript?

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('hi');
async function demo() {
  await sleep(1000);
  console.log('hello');
}

demo();