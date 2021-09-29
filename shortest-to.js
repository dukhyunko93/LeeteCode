let s = "loveleetcode", c = "e";

var shortestToChar = function(s, c) {
  let res = [];
  let revS = '';
  let loops = s.length;

  for (let i = 0; i < loops; i++){
    revS = s[0] + revS;

    backIndex = revS.indexOf(c);
    forwardIndex = s.indexOf(c);
    if (backIndex === -1 || forwardIndex < backIndex && forwardIndex > -1) {
      res.push(forwardIndex);
    } else {
      res.push(backIndex)
    }

    s = s.slice(1);
  }

  return res;
};

console.log(shortestToChar(s,c));

Output: [3,2,1,0,1,0,0,1,2,2,1,0]