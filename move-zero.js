// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    let i = 0;
    let counter = 0;
    while(i < nums.length - 1 - counter){
        if(nums[i] === 0){
            let removed = nums.splice(i, 1);
            nums.push(removed[0]);
            counter++;
        }else{
            i++;
        }
    }
    return nums;
};

let nums = [0,1,0,3,12]

moveZeroes(nums)