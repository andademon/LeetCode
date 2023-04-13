/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//哈希集合
var getIntersectionNode = function(headA, headB) {
    let hashMap = new Map();
    let nodeA = headA,nodeB = headB;
    while(nodeA){
        hashMap.set(nodeA,1);
        nodeA = nodeA.next;
    }
    while(nodeB){
        if(hashMap.has(nodeB)) return nodeB;
        hashMap.set(nodeB,1);
        nodeB = nodeB.next;
    }
};