// 5). Create a function that takes in a number as a string n and returns
// the number without trailing and leading zeros.
// ● Trailing Zeros are the zeros after a decimal point which don't
// affect the value (e.g. the last three zeros in 3.4000 and
// 3.04000).
// ● Leading Zeros are the zeros before a whole number which
// don't affect the value (e.g. the first three zeros in 000234 and
// 000230).
// removeLeadingTrailing("230.000") ➞ "230"
// removeLeadingTrailing("00402") ➞ "402"
// Notes
// ● Return a string.
// ● If you get a number with .0 on the end, return the integer value
// (e.g. return "4" rather than "4.0").
// ● If the number is 0, 0.0, 000, 00.00, etc... return "0".

function removeLeadingTrailing(str)
{
    str = str.replaceAll(/^0+/g,''); // removes leading zeros
    while(str.match(/0$/g) && str.match('.'))
    {
    str = str.replaceAll(/0$/g,'');// removes trailing zero after point;

    }
    str = str.replace(/\.$/g,''); // removes point if present at the end
    str = str ? str : 0;
    return str;
}

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("4.0"));
console.log(removeLeadingTrailing("0.4"));
console.log(removeLeadingTrailing("3.4000"));
console.log(removeLeadingTrailing("03.04000"));
console.log(removeLeadingTrailing("0.0"));
