var maxSubArray = function(nums) {
  let sum = 0;
  let maxSum = -Infinity;
  
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0]
  
  for(let i = 0;i<nums.length;i++){
      sum+=nums[i];
      console.log(sum);
      maxSum = Math.max(maxSum,sum);
      console.log(maxSum);
      if(sum < 0) sum = 0;
      console.log(sum);
  }
  return maxSum;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums));