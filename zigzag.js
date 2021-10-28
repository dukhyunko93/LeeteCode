var convert = function(s, numRows) {
  let map = {}, direction, count = 1, result = "";

  for (let i = 1; i <= numRows; i++){
    map[i] = [];
  }

  for (let j = 0; j < s.length; j++){
    map[count].push(s[j]);

    if (count === 1 && numRows !== 1) direction = "up";
    if (count === numRows && numRows !== 1) direction = "down";
    if (direction === "up" && numRows !== 1 ) count++;
    if (direction === "down" && numRows !== 1 ) count--;
  }

  for (arr in map) {
    result += map[arr].join("");
  }

  return result;
};

let s = "AB", numRows = 1;

console.log(convert(s, numRows));

//test/