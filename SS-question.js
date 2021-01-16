let a1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
let a2 = [2, 1, 8, 3]

function sortArray(arr1, arr2){
    result = [];

    // if the number in array 1 is matching at the number at the specific index of array 2
    // push it in to the result and take it out of array 1 so that numbers that do not exist
    // remains in the array
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                result.push(arr1[j])
                arr1.splice(j, 1)
            }
        }
    }

    // with the ones that are remaining sort them and insert it at the end of the result.
    arr1.sort();
    return result.concat(arr1);
}

sortArray(a1, a2)
// node SS-question.js