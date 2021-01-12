var removeDuplicates = function(nums) {
    let i = 0;
    while(i < nums.length){
        if(nums[i] === nums[i + 1]){
            for(let j = i; j < nums.length; j++){
                nums[j] = nums[j + 1];
            }
            nums.pop()
        }else{
            i++;
        }
    }
    return console.log(nums.length)
};


let nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums)


// node remove-duplicate.js