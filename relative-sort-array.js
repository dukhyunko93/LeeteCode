var relativeSortArray = function(arr1, arr2) {
    let current = 0, i = 0, j = 1;
    while(current < arr2.length){
        if(arr1[i] === arr2[current]){
            i++;
            j = i + 1
        }
        if(arr1[j] === arr2[current]){
            [arr1[i], arr1[j]] = [arr1[j], arr1[i]]
        }
        if(arr1[i] !== arr2[current]){
            j++
        }
        if(j > arr1.length){
            current++;
            j = i + 1;
        }
        // console.log("arr", arr1)
        // console.log("i", i)
        // console.log("j", j)
        // console.log("current", current)
    }
    let unsorted = arr1.slice(i, arr1.length).sort((a,b) => a - b);
    arr1.splice(i, unsorted.length, ...unsorted);
    return arr1;
};


let arr1 = [2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31], arr2 = [2,42,38,0,43,21];
relativeSortArray(arr1, arr2);

// node relative-sort-array.js
