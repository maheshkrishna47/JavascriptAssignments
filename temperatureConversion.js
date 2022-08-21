// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

convert('Fahrenheit',37);
convert('Celsius',98.6);
function convert(to,temp)
{
    if(to === 'Celsius')
    {
        let tempInCelsius = ((temp - 32)/9) * 5;  
        console.log(tempInCelsius);
    }
    else if( to === 'Fahrenheit')
    {
        let tempInFahrenheit = ((temp/5) * 9) + 32;
        console.log(tempInFahrenheit);
    }
    else
    {
        console.log('Invalid input');
    }
}