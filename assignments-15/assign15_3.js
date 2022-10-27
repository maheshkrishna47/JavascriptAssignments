// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.

console.log(func(3,3));

function func(b,m)
{
    // second derivative of f(x)=x^b +x* (e^(b*m)) is f''(x) = (b-1)(b-2)* x^(b-2)
    //when x=m, f''(m) = (b-1)(b-2)* m^(b-2)
    return (b-1) * (b-2) * Math.pow(m, b-2);
}