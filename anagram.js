var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = new Map();
    
    for( let i = 0; i < s.length; i++ ){
        let value = map.get(s[i]);
        value ? map.set(s[i], value + 1) : map.set(s[i], 1);
    }

    for( let j = 0; j < t.length; j++ ){
        let value = map.get(t[j]);
        if(!value) return false; 
        map.set(t[j], value - 1);
    }
    return true;
};

let s = "anagram", t = "nagaram"

isAnagram(s,t)
// node anagram.js