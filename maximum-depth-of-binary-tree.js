var maxDepth = function(root) {
    let result = getResult(root);
    function getResult(root) {
        if(!root) return 0;
        let left = getResult(root.left) + 1;
        let right = getResult(root.right) + 1;
        return Math.max(left, right);
    }
    
    return result;
};