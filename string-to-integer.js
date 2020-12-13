// Example 1:

// Input: str = "42"
// Output: 42
// Example 2:

// Input: str = "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. 
// Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: str = "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

var myAtoi = function(s) {
    let array = s.split(" ")
    let result = 0;
    for (let i = 0; i < array.length; i++){
        if(!!result) break
        if(array[i] === "" || !!parseInt(array[i])){
            if(!!parseInt(array[i])) result = parseInt(array[i])
        }
    }
    if(result <= -2147483648) return -2147483648;
    if(result >= 2147483648) return 21474836487;
    return result;
};

let str = "4193 with words"
myAtoi(str);

// node string-to-integer.js