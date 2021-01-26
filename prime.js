function countPrimes(nums){
    let result =[];
    for(let i = 0; i < nums.length; i++){
        isPrime(nums[i]) ? result.push(nums[i]) : null;
    }
    return result
}

function isPrime(num) {
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
}

let nums = [1,20,555,212,12,17,121,19,21214,64737,12,19,13,25]
console.log(countPrimes(nums));
// node prime.js