var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    
    return nums.length
};

let nums = [2,3,3,2], val = 3;
removeElement(nums, val);

// node remove-element.js