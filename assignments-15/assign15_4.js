// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15

// This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its
// corresponding triangle number of the sequence.

function triangle(num)
{
    let sum = 0;
    let incrementalVal = 1;
    let triangleArray = [];
    for(let i=0; i<num; i++)
    {
        sum = sum + incrementalVal;
        incrementalVal++;
        triangleArray.push(sum);
    }
    console.log(triangleArray);
    return triangleArray.reduce((total,num)=>total+num,0);
}

console.log(triangle(1));
console.log(triangle(6));
