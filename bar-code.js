// In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists. 

// Example 1:

// Input: barcodes = [1,1,1,2,2,2]
// Output: [2,1,2,1,2,1]
// Example 2:

// Input: barcodes = [1,1,1,1,2,2,3,3]
// Output: [1,3,1,3,1,2,1,2]

var rearrangeBarcodes = function(barcodes) {
    let numbers = new Map();
    
    for (let i of barcodes) {
        numbers.set(i, (numbers.get(i) || 0) + 1);
    }

    let arr = Array.from(numbers.keys()).sort(((a, b) => numbers.get(b) - numbers.get(a)));
    let n = barcodes.length, i = 0, result = [];
    
    for (let e of arr) {
        let count = numbers.get(e);
        
        while (count--) {
            result[i] = e;
            i += 2;
            if (i >= n) i = 1;
        }
    }
    
    return result;
}

let barcodes = [1,2,1,1,3,3,3];

rearrangeBarcodes(barcodes)