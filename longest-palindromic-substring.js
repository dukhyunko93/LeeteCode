// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
    let i = 0
    let j = s.length - 1;
    let max = ""
    while(i < s.length - 1 && j >= i){
        if(s[i] === s[j]){
            i++;
        }
        j--;
    }
    console.log(i)
};

let s = "aaaabbbcd"

longestPalindrome(s)