var reverseString = function(s) {
    let lastIndex = s.length - 1;

    for ( let i = 0; i < s.length / 2; i++ ){
        swap(s, i, lastIndex - i);
    }

    function swap(s, i, j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s
};

var reverseString = function(s) {
    let lastIndex = s.length - 1;

    for ( let i = 0; i < s.length / 2; i++ ){
        [s[i], s[lastIndex - i]] = [s[lastIndex - i], s[i]];
    }

    return s;
}

let input = ["h","e","l","l","o"]

reverseString(input)

// node reverse-string.js