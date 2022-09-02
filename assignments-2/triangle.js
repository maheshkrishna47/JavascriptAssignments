// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

printTriangleType(8,8,8);
printTriangleType(8,8,9);
printTriangleType(8,12,9);

function printTriangleType(side1,side2,side3)
{
    if(side1 === side2 && side2 === side3)
    {
        console.log('Triangle is equilateral');
    }
    else if(side1 === side2 || side2 === side3 || side1 === side3)
    {
        console.log('Triangle is isosceles');
    }
    else
    {
        console.log('Triangle is scalene');
    }
}