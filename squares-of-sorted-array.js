var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a,b) => a - b);
    return nums
};

let nums = [-7,-3,2,3,11];
sortedSquares(nums)

// node squares-of-sorted-array.js