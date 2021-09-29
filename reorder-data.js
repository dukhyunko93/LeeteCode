let logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero"
];


var reorderLogFiles = function(logs) {
  let digitLog = [], letterLogs = [];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i].split(" ")[1][0] >= '0' && logs[i].split(" ")[1][0] <= '9') {
      digitLog.push(logs[i]);
    } else {
      letterLogs.push(logs[i]);
    }
  }
  
  letterLogs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);
    const c = aBody.localeCompare(bBody);
    if (c) return c;
    return a.localeCompare(b);
  });

  return letterLogs.concat(digitLog);
};

console.log(reorderLogFiles(logs));