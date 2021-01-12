var findMaxConsecutiveOnes = function(nums) {
    let result = 0, current = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) {
            result = Math.max(result, current);
            current = 0;
        } else {
            current++;
        }
    }
    return Math.max(result, current)
};

let nums = [1,1,0,1,1,1];
findMaxConsecutiveOnes(nums)

// node max-consecutive-nums.js