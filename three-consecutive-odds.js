var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1 ) return true
    }

    return false;
};

let arr = [1,1,1]
threeConsecutiveOdds(arr)

// node three-consecutive-odds