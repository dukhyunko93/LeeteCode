// var heightChecker = function(heights) {
//     let result = 1, lowestidx;
//     for(let i = 0; i < heights.length; i++){
//         if(heights[i] > heights[i + 1]){
//             lowestidx = i + 1;
//             for(let j = i + 1; j < heights.length; j++){
//                 if(heights[lowestidx] > heights[j]){
//                     lowestidx = j;
//                 }
//             }
//             [heights[i], heights[lowestidx]] = [heights[lowestidx], heights[i]];
//             result++;
//         }
//     }
//     result === 1 ? result = 0 : null;
//     console.log(result, heights)
//     return result
// };

var heightChecker = function(heights) {
    let original = [...heights], result = 0;
    heights.sort((a,b) => a - b);
    for(let i = 0; i < heights.length; i++){
        if(heights[i] !== original[i]) result++
    }
    return result
}

let heights = [1,1,4,2,1,3];
heightChecker(heights);


// node height-checker.js