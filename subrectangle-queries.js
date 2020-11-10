// Input
// ["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
// [[[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]],[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]
// Output
// [null,1,null,5,5,null,10,5]
// Explanation
// SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);  
// // The initial rectangle (4x3) looks like:
// // 1 2 1
// // 4 3 4
// // 3 2 1
// // 1 1 1
// subrectangleQueries.getValue(0, 2); // return 1
// subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
// // After this update the rectangle looks like:
// // 5 5 5
// // 5 5 5
// // 5 5 5
// // 5 5 5 
// subrectangleQueries.getValue(0, 2); // return 5
// subrectangleQueries.getValue(3, 1); // return 5
// subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
// // After this update the rectangle looks like:
// // 5   5   5
// // 5   5   5
// // 5   5   5
// // 10  10  10 
// subrectangleQueries.getValue(3, 1); // return 10
// subrectangleQueries.getValue(0, 2); // return 5

var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle
};

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++){
        for(let j = col1; j <= col2; j++){
            this.rectangle[i][j] = newValue;
        }
    }
};

SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col]
};