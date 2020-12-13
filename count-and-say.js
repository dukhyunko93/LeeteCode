var countAndSay = function(n) {
    let curr = '1';
    if(n == 1) return curr;
    return countSay(n - 1, curr);
};

var countSay = function(n, curr){
    if(n === 0) return curr;
    let count = 1, result = "";
    for(let i = curr.length - 1; i >= 0; i--){
        if(curr[i] !== curr[i - 1]){
            result = count + curr[i] + result;
            count = 1;
        }else{ count++; }
    }
    return countSay(n - 1, result)
}

countAndSay(3);

// node count-and-say.js