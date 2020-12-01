var containsDuplicate = function(nums) {
    let numsFreq = {};
    for(i = 0; i < nums.length; i++){
        numsFreq[nums[i]] = (numsFreq[nums[i]] || 0) + 1;
        if(numsFreq[nums[i]] > 1) return true;
    }
    return false;
};

let nums = [1,1,1,3,3,4,3,2,4,2];
containsDuplicate(nums);
