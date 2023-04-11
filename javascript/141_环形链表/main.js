/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//额外O(n)空间
// var hasCycle = function(head) {
//     let node = head;
//     while(node){
//         if(node.arrived == undefined){
//             node.arrived = true;
//             node = node.next;
//         }else return true;
//     }
//     return false;
// };

//快慢指针,额外O(1)空间
var hasCycle = function(head) {
    if(head == null || head.next == null) return false;
    let slow = head;
    let fast = head.next;
    while(fast != slow){
        if(fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}