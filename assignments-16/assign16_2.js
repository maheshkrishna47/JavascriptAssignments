// 2.) Create a function that finds the word "happiness" in the given
// string (not case sensitive). If found, return "Hurray!", otherwise
// return "There is no happiness.".
// Example
// findHappiness(“Work makes me happy”) -> There is no happiness.
// findHappiness(“You give me the feeling of happiness”) -> Hurray


function findHappiness(str)
{
    matches = str.match('happiness');
    if(matches && matches.length>0)
    return 'Hurray';
    else
    return 'There is no happiness';
}

console.log(findHappiness('Work makes me happy'));
console.log(findHappiness('You give me the feeling of happiness'));