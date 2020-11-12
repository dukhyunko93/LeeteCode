// oddOccurrencesOfZerosGiven an array of positive integers, return the number of integers that contain an odd number of zeros.
// Example: a = [5, 10, 200, 10070, 56]
// Output: 2 (because 10 has one zero and 10070 has three zeros). The other numbers have an even number of zeroes.
// Constraints:
// 0 <= input array length <= 10^5
// Each integer will be between 1 and 10^9.

const oddOccurrencesOfZerosGiven = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        let numString = nums[i].toString();
        let zeroOccurences = 0;
        for (let j = 0; j < numString.length; j++){
            if (numString[j] === "0") zeroOccurences++;
        }
        if(zeroOccurences % 2 === 1)count++;
    }
    return console.log(count)
}

let nums = [5, 10, 200, 10070, 56]
oddOccurrencesOfZerosGiven(nums)
// node odd-occurrences-of-zero.js