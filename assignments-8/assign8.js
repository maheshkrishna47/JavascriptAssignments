// 1. Can we put duplicate values in the set object ?

// No.We cannot. 

// 2. Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object
let obj = new Set();
obj.add(1);
console.log(obj);
obj.add(2);
console.log(obj);
obj.delete(2);
console.log(obj);


// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.
let setObj = new Set();
setObj.add(Math.floor(Math.random() * 10));
setObj.add(Math.floor(Math.random() * 10));
setObj.add(Math.floor(Math.random() * 10));
setObj.add(Math.floor(Math.random() * 10));
console.log(setObj);
if(setObj.has(8))
{ 
    console.log('Set obj has 8 in it');
}

