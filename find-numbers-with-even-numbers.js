var findNumbers = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        let current = nums[i], counter = 1;
        while(current >= 10){
            ++counter;
            current = current / 10;
            console.log(current, counter)
        }
        if(counter % 2 === 0) ++result;
    }
    return console.log(result);
};

let nums = [100000];
findNumbers(nums)

// node find-numbers-with-even-numbers.js