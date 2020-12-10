var firstUniqChar = function(s) {
    let charFreq = {};
    let min = s.length;
    let unique = false;
    if(min === 0) return -1;

    for(let i = 0; i < s.length; i++){
        charFreq[s[i]] ?
        charFreq[s[i]].count = charFreq[s[i]].count + 1 :
        charFreq[s[i]] = { count: 1, index: i }
    }

    for(key in charFreq){
        if(charFreq[key].count === 1){
            charFreq[key].index < min ? min = charFreq[key].index : null;
            unique = true
        }
    }
    
    return unique === true ? console.log(min) : console.log(-1)
};

let s = "cc"

firstUniqChar(s)


// node first-unique-char.js
