function sortArray(array){
    let oddArray = [], evenArray = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            oddArray.push(array[i]);
            array.splice(i, 1);
            --i;
        } if(array[i] % 2 === 0){
            evenArray.push(array[i]);
            array.splice(i, 1);
            --i;
        } 
    }

    array = evenArray.sort().concat(oddArray.sort());
    return console.log(array) 
}

array = [1,2,5,6,7,3,4];
sortArray(array);

// node sort-even-and-odd.js