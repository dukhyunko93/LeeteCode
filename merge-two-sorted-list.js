var mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(), fl = l1, sl = l2 , current = fh;
    
    while(fl && sl){
        if(fl.val <= sl.val){
            current.next = fl;
            fl = fl.next;
            current = current.next;
        }else{
            current.next = sl;
            sl = sl.next;
            current = current.next;
        }
    }
    
    if(!!fl) current.next = fl;
    if(!!sl) current.next = sl;
    
    return fh.next;
};