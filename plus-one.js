var plusOne = function(digits) {
    let lastIdx = digits.length - 1
    digits[lastIdx] = digits[lastIdx] + 1
    for(i = lastIdx; i >= 0; i--){
        if(i === 0){
            if(digits[i] === 10){
                digits[i] = 0;
                digits.unshift(1);
            } 
        }
        if(digits[i] === 10){
            digits[i] = 0;
            digits[i - 1]++;
        }
    }
    return digits
};

let digits = [9,9,9]

plusOne(digits)