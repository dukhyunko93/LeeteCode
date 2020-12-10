//Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output:        [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


// [[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]]

var rotate = function(matrix) {
    let map = {};

    for(let i = 0; i < matrix.length; i++){
        let maxMatrix = matrix[i].length - 1
        for(let j = maxMatrix ; j >= 0; j--){
            let column;
            if(i === 0) column = maxMatrix;
            if(i === maxMatrix) column = 0;
            if(i !== 0 && i !== maxMatrix) column = maxMatrix - i
            map[[j,column]] = {
                row: j,
                column: column,
                value: matrix[i][j]  
            }
        }
    }

    for(key in map){
        matrix[map[key].row][map[key].column] = parseInt(map[key].value)
    }
    console.log(matrix)
};
// var rotate = function(matrix) {
//     const len = matrix.length - 1;
  
//     for (let i = 0; i <= len / 2 ; i++) {
//       for (let j = 0; j < len / 2; j++) {
//         rotateCircle(matrix, i, j);
//       }
//     }
  
//     function rotateCircle(matrix, i, j) {
//       const first = matrix[i][j];
//       const second = matrix[j][len - i];
//       const third = matrix[len - i][len - j];
//       const forth = matrix[len - j][i];
//       // console.log("1,2,3,4 =>", first, second, third, forth);
//       matrix[i][j] = forth;
//       matrix[j][len - i] = first;
//       matrix[len - i][len - j] = second;
//       matrix[len - j][i] = third;
//     }
// };

let input = [[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]]

rotate(input)

// node rotate-image.js

// [0,0] => [0,2] => [2,2] => [2,0]
// [0,1] => [1,2] => [2,1] => [1,0]


// [0,0] => [0,3] => [3,3] => [3,0] 
// [0,1] => [1,3] => [3,2] => [2,0] 
// [0,2] => [2,3] => [3,1] => [1,0]

// [1,1] => [1,2] => [2,2] => [2,1]

// if row 0 then column is array.length
// new row = previous column 
// if row array.length column  then column = 0
// new row = previous column 
// if row !== 0 || array.length t hen column is previous column - row
// if column 




// [0,3] => [3,3] => [3,0] => [0,0]