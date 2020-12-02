// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

function singleNumber(nums) {
	return nums.reduce((prev, curr) => console.log(prev ^ curr), 0);
}

let nums = [4,1,2,1,2]
singleNumber(nums)