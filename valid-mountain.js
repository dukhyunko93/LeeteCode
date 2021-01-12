var validMountainArray = function(arr) {
    if(arr.length < 3) return false;

    let ascending = false, descending = false, i = 0;
    while(i < arr.length){
        if(arr[i] < arr[i + 1]) ascending = true;
        if(arr[i] > arr[i + 1]) descending = true;
        if(arr[i] === arr[i + 1]) return false;
        if(descending && arr[i] < arr[i + 1]) return false;
        i++;
    }
    return console.log(ascending && descending);
};

let arr = [9,8,7,6,5,4,3,2,1,0]
validMountainArray(arr)
// node valid-mountain.js