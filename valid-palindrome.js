var isPalindrome = function(s) {
    let letters = [];
    for(let i = 0; i < s.length; i++){
        if((/[a-zA-Z0-9]/).test(s[i])) letters.push(s[i].toLowerCase())
    }
    
    for(let j = 0; j < letters.length / 2; j++){
        if(letters[j] !== letters[letters.length - 1 - j]) return false
    }

    return true
};


let s = "A man, a plan, a canal: Panama"
isPalindrome(s)

// node valid-palindrome.js