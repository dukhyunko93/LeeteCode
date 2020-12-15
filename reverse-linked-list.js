var reverseList = function(head) {

    // if(!head) return head;
    // let nextNode = head.next;
    // const help = (currentNode, temp, nextNode) =>{
    //     if(!currentNode) return temp;
    //     currentNode.next = temp;
    //     temp = currentNode;
    //     if(nextNode) temp = help(nextNode, temp, nextNode.next);
    //     return temp;
    // }
    // let final = help(head, null, nextNode)
    // return final
    
    let prev = null;
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev
};