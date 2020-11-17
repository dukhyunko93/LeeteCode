var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let sortedArray = [];
    while(nums1[i] && nums2[j] || nums1[i] === 0 && nums2[j]|| nums1[i] && nums2[j] === 0){
        if(nums1[i] <= nums2[j]){
            sortedArray.push(nums1[i]);
            i++;
        } else {
            sortedArray.push(nums2[j]);
            j++;
        }
    };
    while(nums1[i] || nums1[i] === 0){
        sortedArray.push(nums1[i]);
        i++;
    };
    while(nums2[j] || nums2[j] === 0){
        sortedArray.push(nums2[j]);
        j++;
    };
    for(let k = 0; k < sortedArray.length; k++){
        let nextPair = sortedArray[sortedArray.length - k - 1]
        if(sortedArray[k] > nextPair){
            return ((sortedArray[k] + nextPair) / 2)
        }
        if(sortedArray[k] === nextPair){
            return nextPair
        }
    }
};

let nums1 = [0]
let nums2 = []

findMedianSortedArrays(nums1, nums2)