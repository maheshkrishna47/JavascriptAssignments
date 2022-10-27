// 5). Given a total due and an array representing the amount of
// change in your pocket, determine whether or not you are able to pay
// for the item. Change will always be represented in the following
// order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
// you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(arr,due)
{
    let totalValOfQuarter = arr[0] * 0.25;
    let totalValOfDimes = arr[1] * 0.1;
    let totalValOfNickels = arr[2] * 0.05;
    let totalValOfPenny =arr[3] * 0.01;
    let total = totalValOfQuarter + totalValOfDimes + totalValOfNickels + totalValOfPenny;

    if(total >= due) return true;
    else return false;
}

console.log(changeEnough([25, 20, 5, 0], 4.25));
console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));