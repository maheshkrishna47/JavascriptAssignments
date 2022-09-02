// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

console.log(getGrade(95));
console.log(getGrade(105));
console.log(getGrade(25));

function getGrade(mark)
{
    let grade;
    switch(true)
    {
        case ((mark > 90) && (mark <= 100)):
            grade = 'S';
            break;
        case ((mark > 80) && (mark <= 90)):
            grade = 'A';
            break;
        case ((mark > 70) && (mark <= 80)):
            grade = 'B';
            break;
        case ((mark > 60) && (mark <= 70)):
            grade = 'C';
            break;
        case ((mark > 50) && (mark <= 60)):
            grade = 'D';
            break;
        case ((mark > 40) && (mark <= 50)):
            grade = 'E';
            break;
        case ((mark > 0) && (mark <= 40)):
            grade = 'Student has failed';
            break;    
        default:
            grade = 'Invalid marks';         
    }

    return grade;
}