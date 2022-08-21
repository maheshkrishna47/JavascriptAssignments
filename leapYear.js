// Write a program to find whether a given year is a leap year or not.
isLeapYear(2020);
isLeapYear(2022);
isLeapYear(1900);
isLeapYear(2000);


function isLeapYear(year)
{
    if((year%4 == 0 && year%100 != 0) || year%400 ==0 )
    {
        console.log(`${year} is a leap year`);
    } 
    else
    {
        console.log(`${year} is not a leap year`)
    }
}