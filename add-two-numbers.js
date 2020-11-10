// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {
    let pointer1 = l1;
    let pointer2 = l2;
    let headPointer = new ListNode();
    let head = headPointer;
    let carry  = 0;
    while(pointer1 != null || pointer2 != null) {
        let val1 = pointer1 == null ? 0 : pointer1.val;
        let val2 = pointer2 == null ? 0 : pointer2.val;
        let sum = carry + val1 + val2;
        if(sum > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }
        headPointer.next = new ListNode(sum % 10);
        console.log(head)
        headPointer = headPointer.next;
        pointer1 = pointer1 == null ? null : pointer1.next;
        pointer2 = pointer2 == null ? null : pointer2.next;
    }
    if(carry > 0) {
        headPointer.next = new ListNode(carry);
    }    
    return head.next;
};