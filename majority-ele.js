var majorityElement = function(nums) {
    let freq = new Map();
    for(let i = 0; i < nums.length; i++){
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }
    
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b)
};


let nums = [3,2,3]
majorityElement(nums)
// node majority-ele.js