const oddCells = function(n, m, indices){
    const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];
    for (const [ri, ci] of indices) [rows[ri]++, cols[ci]++];
    const rowOdds = rows.filter(n => n % 2 === 1).length;
    const rowEvens = rows.length - rowOdds;
    const colOdds = cols.filter(n => n % 2 === 1).length;
    const colEvens = cols.length - colOdds;
    return rowOdds * colEvens + rowEvens * colOdds;
};

oddCells(2, 3, [[0,1],[1,1]])


// node cells-with-odd-numbers.js