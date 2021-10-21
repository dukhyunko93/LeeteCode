function solution(S) {
  let set = new Set();
  for (i = 0; i < S.length; i++){
      set.add(S[i])
  }
  let minLength = 0, current = 0;

  for (j = 0; j < S.length; j++){
      // for lower case
      if (S[j] === S[j].toLowerCase()) {
          console.log('lower', S[j], set.has(S[j].toUpperCase()), current, minLength);
          if (set.has(S[j].toUpperCase())) {
              current++;
          } else {
              if (minLength === 0 && current > 1) {
                  minLength = current;
                  current = 0;
                  console.log('lower', current)
              } else if (minLength !== 0 || current > 0){
                  minLength = Math.min(minLength, current);
                  current = 0;
                  console.log('lower', current)
              }
          }
      } else {
        console.log('upper', S[j], set.has(S[j].toLowerCase()), current, minLength);
            if (set.has(S[j].toLowerCase())) {
                current++;
            } else {
                if (minLength === 0 && current > 1) {
                    minLength = current;
                    current = 0;
                    console.log('upper', current)
                } else if (minLength !== 0 || current > 0){
                    minLength = Math.min(minLength, current);
                    current = 0;
                    console.log('upper', current)
                }
            }
      }
  }
  if (current === S.length) minLength = current;
  return minLength === 0 ? -1 : minLength
}


let S = "TacoCat"
// let S = "azABaabza"

console.log(solution(S))