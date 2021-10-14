function solution(S) {
  let set = new Set();
  for (i = 0; i < S.length; i++){
      set.add(S[i])
  }
  let minLength = 0, current = 0;

  for (j = 0; j < S.length; j++){
      // for lower case
      console.log(S[j])
      if (S[j] === S[j].toLowerCase()) {
          if (set.has(S[j].toUpperCase())) {
              current++;
          } else {
              if (minLength === 0 && current > 1) {
                  minLength = current;
                  current = 0;
              } else if (minLength !== 0 ){
                  minLength = Math.min(minLength, current);
                  current = 0;
              }
          }
      } else {
          if (set.has(S[j].toLowerCase())) {
              current++;
          } else {
              if (minLength === 0 && current > 1) {
                  minLength = current;
                  current = 0;
              } else if (minLength !== 0 ){
                  minLength = Math.min(minLength, current);
                  current = 0;
              }
          }
      }
  }
  return minLength
}


let S = "azABazba"
console.log(solution(S))