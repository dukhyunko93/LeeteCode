// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


var romanToInt = function(s) {
    let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let result = 0, current = 0;
    for (let i = s.length - 1; i >= 0; i--){
        if(roman[s[i]] >= current) result += roman[s[i]];
        if(roman[s[i]] < current) result -= roman[s[i]];
        current = roman[s[i]];
    }
    return result;
};