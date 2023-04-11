/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let hashMap = new Map();
    let node = head;
    while(node){
        if(hashMap.has(node)) return node;
        hashMap.set(node,1);
        node = node.next;
    }
    return null;
};



let head = {
    val:1,
    next:{
        val:2,
        next:null
    }
}
head.next.next = head;

let map = new Map();
map.set(head,1)
map.set(head.next,2)
let node = head;
map.set(node,1)
console.log(map)


let node1 = head;
let node2 = head;
console.log(node1 == node2)
// detectCycle(head)
console.log(head.toString())
console.log(head.next.toString())
console.log(head.toString == head.next.toString)