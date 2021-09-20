var lengthOfLastWord = function(s) {
  let lastWord = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastWord += s[i];
    } else if (s[i] === " " && lastWord.length > 0){
      return lastWord.length;
    }
  }
  return lastWord.length;
};

let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));