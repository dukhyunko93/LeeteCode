var isMonotonic = function(A) {
    let initial = Math.sign(A[1] - A[0])
    for(let i = 1; i < A.length - 1; i++){
        let current = Math.sign(A[i + 1] - A[i])
        if(initial === 0) initial = current
        if(current !== initial && current !== 0) return false;
    }
    return true;
};

let A = [1,2,4,5]
isMonotonic(A)

// node monotonic.js