class ListNode{
    constructor(val,next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeSort(head){
    if(head == null || head.next == null) return head;
    let slow = head,fast = head.next;//通过快慢指针找到中位点
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let tmp = slow;
    let r = mergeSort(slow.next);
    tmp.next = null;
    let l = mergeSort(head);
    return merge(l,r);
}

function merge(l1,l2){
    let temp_head = new ListNode();//临时头结点
    let p = temp_head;
    while(l1 && l2){
        if(l1.val > l2.val){
            p.next = l2;
            l2 = l2.next
        }else{
            p.next = l1;
            l1 = l1.next;
        }
        p = p.next;
    }
    p.next = (l1 == null ? l2 : l1);
    return temp_head.next;
}

let head = new ListNode(0);
let array = [4,1];
let node = head;
while(array.length){
    node.next = new ListNode(array.shift());
    node = node.next;
}
console.log(head)
head = mergeSort(head)
console.log(head)