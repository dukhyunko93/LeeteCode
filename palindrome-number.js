var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let reversed = 0;
    let _x = x
    while(x > 0){
        reversed *= 10;
        reversed += x % 10;
        x = Math.trunc(x / 10)
    }
    return console.log(reversed === _x)
};

x = 101
isPalindrome(x)