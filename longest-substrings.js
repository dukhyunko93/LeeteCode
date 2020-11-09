// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// need two counters. one to go thru the string and the other one to count the substring.

const lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let a_pointer = 0
    let b_pointer = 0
    let max = 0
    
    while(b_pointer < s.length){
        if(!set.has(s[b_pointer])){
            set.add(s[b_pointer])
            b_pointer++
            max = Math.max(set.size, max)
        }else{
            set.delete(s.charAt(a_pointer))
            a_pointer++
        }
            
    }
    return max
};
    
s = "sdawjmmbxckves"

lengthOfLongestSubstring(s)


// node longest-substrings.js