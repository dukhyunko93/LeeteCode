// var checkIfExist = function(arr) {
//     let numbers = {};
//     for(let i = 0; i < arr.length; i++){
//         numbers[arr[i]] = (numbers[arr[i]] || 0) + 1;
//     }

//     for(key in numbers){
//         let doubledNumber = key * 2;
//         let halfNUmber = key / 2;
//         if(doubledNumber === 0 && numbers[doubledNumber] >= 2){
//             return true;
//         } else {
//             numbers[doubledNumber] = 0;
//         }
//         if (numbers[doubledNumber] || numbers[halfNUmber]){
//             return true;
//         }
//     }
//     return false;
// };
var checkIfExist = function(arr) {
    var set = new Set();
    for (var a of arr) {
        if (set.has(a)) {
            return true;
        }
        
        set.add(a / 2);
        set.add(a * 2);
    }
    
    return false;
};


let arr = [0,5,-19,4,10];

checkIfExist(arr)