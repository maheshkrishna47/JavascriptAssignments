// 2. Write a program in JavaScript to map the student ids, names and scores.
// a) Add data for 3 students (use map functions)
// b) Get Student Names using map functions
// c) Delete Student Scores using map functions

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]
// Output:
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----one parameter-----
// [ 1, 2, 3 ]
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// [ 90, 88, 92 ]
// -----two parameter-----
// id 1, 2, 3
// name Hitanshu,Ninad,Amandeep
// scores 90,88,92
// -----three parameter-----
// id 1, 2, 3
// Map(3) {
// 'id' => [ 67, 48, 29 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// name Hitanshu,Ninad,Amandeep
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// scores 90,88,92
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }

let ids = [ 1, 2, 3 ];
let names = [ 'Hitanshu', 'Ninad', 'Amandeep' ];
let scores = [ 90, 88, 92 ];


let index = 0;
function mapFun(id)
{
    let obj = {};
    obj.id = id;
    obj.name = names[index];
    obj.score = scores[index];
    index++;
    return obj;
}

let studentArr = ids.map(mapFun);



console.log(studentArr.map((obj)=>obj.name));
console.log('-----one parameter-----');
console.log(studentArr.map((obj)=>obj.id));
console.log(studentArr.map((obj)=>obj.name));
console.log(studentArr.map((obj)=>obj.score));
console.log('-----two parameter-----');


for(let key in studentArr[0])
{
    console.log(key +' '+ studentArr.map((obj)=>obj[key]));
}

console.log('-----three parameter-----');
console.log(studentArr);

