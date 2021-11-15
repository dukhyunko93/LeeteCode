// 1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
// 2. Any live cell with two or three live neighbors lives on to the next generation.
// 3. Any live cell with more than three live neighbors dies, as if by over-population.
// 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Testing

var gameOfLife = function(board) {
    let boardCopy = [...board]
    for (let i = 0; i < boardCopy.length; i++){
        for (let j = 0; j < boardCopy[i].length; j++){
            if(boardCopy[i][j] === 1){
                if (deadOrLive(i, j, boardCopy) < 2) {
                    board[i][j] = 0;
                } else if (deadOrLive(i, j, boardCopy) > 3){
                    board[i][j] = 0;
                } else {
                    board[i][j] = 1;
                }
            } else {
                if ( deadOrLive(i, j, boardCopy) === 3){
                    board[i][j] = 1;
                } else {
                    board[i][j] = 0;
                }
            }
        }
    }

    function deadOrLive(i, j, boardCopy) {
        let count = 0;
        // horizontal
        if (j < boardCopy[i].length - 1 && boardCopy[i][j + 1] === 1) count++;
        if (j > 0 && boardCopy[i][j - 1] === 1 ) count++;
        // vertical
        if (i < boardCopy.length - 1 && boardCopy[i + 1][j] === 1) count++;
        if (i > 0 && boardCopy[i - 1][j] === 1) count++;
        // diagonal
        if (i < boardCopy.length - 1  && j < boardCopy[i].length - 1 && boardCopy[i + 1][j + 1] === 1) count++;
        if (i < boardCopy.length - 1 && boardCopy[i + 1][j - 1] === 1) count++;
        if (i > 0  && j < boardCopy[i].length - 1 && boardCopy[i - 1][j + 1] === 1) count++;
        if (i > 0  && j > 0 && boardCopy[i - 1][j - 1] === 1) count++;
        return count;
    };
    console.log(board)
};

board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]]
// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(gameOfLife(board));