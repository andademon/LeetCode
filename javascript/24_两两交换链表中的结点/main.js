/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * [1] -> [2] -> [3] -> [4]
 */

var swapPairs = function(head) {
    let len = 0;
    let temp = head;
    while(temp){
        len++;
        temp = temp.next;
    }
    if(len < 2) return head;
    let newHead = new ListNode();
    newHead.next = head;
    temp = newHead;
    // temp = temp.next;
    while(temp.next && temp.next.next){
        let temp1 = temp.next;
        let temp2 = temp.next.next;

        //temp1.val = 0;//浅复制吗，修改temp1结果temp也会被跟着修改

        temp.next = temp2;
        temp1.next = temp2.next;
        temp2.next = temp1;

        temp = temp1;

        // temp2.next = temp1;
        // temp1.next = temp3;
        // temp = temp2;

        // temp = temp.next.next;
    }
    return newHead.next;
};


//加个空节点与不加空节点结果完全不同
// var swapPairs = function(head) {
//     let newHead = new ListNode(0);
//     newHead.next = head;
//     let temp = newHead;
//     while (temp.next !== null && temp.next.next !== null) {
//         let node1 = temp.next;
//         let node2 = temp.next.next;
//         temp.next = node2;
//         node1.next = node2.next;
//         node2.next = node1;
//         temp = node1;
//     }
//     return newHead.next;
// };


list = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:null
            }
        }
    }
}

console.log(swapPairs(list));