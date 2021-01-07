var duplicateZeros = function(arr) {
    let max = arr.length;
    for(let i = 0; i <= max; i++){
        if( i === max ) arr.splice(i, arr.length);

        if(arr[i] === 0){
            let splitArr = arr.slice(i, arr.length);
            splitArr.unshift(0);
            arr.splice(i, splitArr.length, ...splitArr);
            i++;

            if( i === max ) arr.splice(i, arr.length);
        }
    }
    console.log(arr)
};

var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] == 0) {
            for(let j = arr.length - 1; j > i; j--) 
                arr[j] = arr[j - 1];
            i++;
        }
    }
};

var duplicateZeros = function(arr) {
    let i=0;
    let len=arr.length;
    while(i<arr.length){
        if(arr[i]==0){
            arr.splice(i,0,0);
            i++;
        }            
        i++;
    }
    while(arr.length>len)
        arr.pop();
};



let arr = [0,0,0,0,0,0,0]
duplicateZeros(arr)
// node duplicate-zeros.js