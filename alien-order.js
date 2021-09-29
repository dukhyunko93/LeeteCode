let words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz";

// var isAlienSorted = function(words, order) {
//     let orderMap = new Map();
//     for (let i = 0; i < order.length; i++) {
//       orderMap.set(order[i], i);
//     }

//     let j = 0, k = 1
//     while (!!words[k]) {
//       let l = 0;
//       let shorterString = words[j].length < words[k].length ? words[j] : words[k];

//       if (words[j][0] === words[k][0]) {
//         while (!!shorterString[l]) {
//           if (orderMap.get(words[j][l]) > orderMap.get(words[k][l])) {
//             return false;
//           } else if (
//             l === shorterString.length - 1 &&
//             words[j].length > words[k].length &&
//             words[j][l] === words[k][l]
//           ){
//             return false;
//           }
//           l++;
//         }
//       } else if (orderMap.get(words[j][0]) > orderMap.get(words[k][0])) {
//         return false
//       }
//       j++;
//       k++;
//     }

//     return true;
// };

var isAlienSorted = function(words, order) {
  for(let i=1;i<words.length;i++) {
      const a = words[i-1]
      const b = words[i]
      const maxLen = Math.max(a.length, b.length)
      for(let j=0;j<maxLen;j++) {
          const indexA = order.indexOf(a[j])
          const indexB = order.indexOf(b[j])
          console.log(indexA, indexB);
          if (indexA > indexB) {
              return false
          } else if (indexA < indexB) {
              j=maxLen
          }
      }
  }
  return true
};

console.log(isAlienSorted(words, order));
