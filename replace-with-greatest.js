var replaceElements = function(arr) {
    let i = 0, max = 0;
    while(i < arr.length){
        for(let j = i + 1; j < arr.length; j++){
            max < arr[j] ? max = arr[j] : null
        }
        if(i === arr.length - 1){
            arr[i] = -1
        } else{
            arr[i] = max;
        }
        max = 0;
        i++;
    }
    return arr;
};

let arr = [17,18,5,4,6,1];
replaceElements(arr)


// node replace-with-greatest.js