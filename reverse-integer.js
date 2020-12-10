// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer 
// range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

// Example 1:

// Input: x = 123
// Output: 321

var reverse = function(x) {
    if (Math.abs(x) > (2 ** 31)) return 0
    if (x === 0) return 0

    let _x = Math.abs(x);
    let result = 0;

    while(_x > 0){
        result = ((result * 10) + (_x % 10));
        _x = Math.floor(_x / 10);
        console.log(_x)
    }

    if (result > (2 ** 31)) return 0
    return x < 0 ? result * -1 : result
}

let x = 123;

reverse(x)

// node reverse-integer.js