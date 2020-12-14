var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let r = '';
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) return console.log(r);
      }
      r += strs[0][i];
    }
    return console.log(r);
  
};

let strs = ["flower","flow","flight"]
longestCommonPrefix(strs)
// node longest-common-prefixes.js