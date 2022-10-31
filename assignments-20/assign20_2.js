// 2). Is it possible to use async/await with promise chains? If yes,
// how can this be achieved?

//Yes. Syntax is simple and easy to use.

async function func1() {
  return "hi";
}

async function func2(str) {
  return str + " hello";
}

async function func3(str) {
  return str + " Goodmorning";
}

async function test() {
  let v1 = await func1();
  console.log(v1);
  let v2 = await func2(v1);
  console.log(v2);
  let v3 = await func3(v2);
  console.log(v3);
}

test();
