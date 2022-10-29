// 7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits. Your

// task is to create a function that takes a string and returns true if the
// PIN is valid and false if it's not.
// Examples
// validatePIN("1234") ➞ true
// validatePIN("12345") ➞ false

function validatePIN(str)
{
    return str.match('^\\d{4}$|^\\d{6}$') ? true : false;
}

console.log(validatePIN("123"));
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("123456"));
console.log(validatePIN("1234567"));