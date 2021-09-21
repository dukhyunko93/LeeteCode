var uniqueMorseRepresentations = function(words) {
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let set = new Set();

  for(word of words){
    let code = "";
    for(char of word){
      const index = char.charCodeAt(0) - 97;
      code += morse[index];
    }
    set.add(code);
  }
  return set.size;
};

console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]));