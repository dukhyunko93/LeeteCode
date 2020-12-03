// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


var isValidSudoku = function(board) {
    let seen = new Set();
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        let cell = board[i][j];
        if(cell != '.') {
            let colCell = `cell: ${j} ${cell}`;
            let rowCell = `row: ${i} ${cell}`;
            let subBoxCell = `subBox: ${parseInt(i/3)}-${parseInt(j/3)} ${cell}`;
        
            if(!seen.has(colCell) && !seen.has(rowCell) && !seen.has(subBoxCell)) {
                seen.add(colCell);
                seen.add(rowCell);
                seen.add(subBoxCell);
            }
            else 
                return false;
          }
      }
    }
    return true;
};


let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

isValidSudoku(board)