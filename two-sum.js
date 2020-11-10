const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      let another = target - nums[i];
      if (another in map) {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
};

let nums = [3,4,2,6,1]

twoSum(nums, 7)



// node add-two-numbers