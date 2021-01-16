var sortArrayByParity = function(A) {
    let i = 0, j = 1;
    while(i < A.length){
        if(A[i] % 2 === 1){
            while(j < A.length){
                if(A[j] % 2 === 0){
                    [A[i], A[j]] = [A[j], A[i]];
                    break;
                }
                j++;
            }
        }
        i++;
        j = i + 1
    }
    return console.log(A);
};

let A = [0,2,1]
sortArrayByParity(A)
// node sort-array-by-parity.js