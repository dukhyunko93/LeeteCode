function solution(S) {
    let char = 'A', countB = 0, minDelete = 0;
    for(let letter of S) {
        if (char === letter) {
            minDelete = Math.min(countB, minDelete + 1);
        }
        else {
            countB++;
        }
    }
    return minDelete;
}


let S = "ABAABABBBB"
console.log(solution(S))