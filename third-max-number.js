var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    var len = nums.length;
    if(len <= 2){
    	return Math.max(...nums);
    }
    if(len === 3){
    	return Math.min(...nums);
    }
    nums = nums.sort((a, b)=> b - a);
    return nums[2];
};

let nums = [3,2,0,1,2,3];
thirdMax(nums);

// node third-max-number.js