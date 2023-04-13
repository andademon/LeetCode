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
//冒泡排序，超时 O(n);
var sortList = function(head) {
    let node = head;
    let sign = 0;
    let hashMap = new Map();
    while(node && node.next){
        let temp_node = node;
        while(temp_node.next && !hashMap.has(temp_node.next)){
            if(temp_node.val > temp_node.next.val){
                let val = temp_node.val;
                temp_node.val = temp_node.next.val;
                temp_node.next.val = val;
                sign = 1;
            }
            temp_node = temp_node.next;
        }
        hashMap.set(temp_node,1);//将尾节点入哈希表(一次冒泡排序尾节点已经最大)
        if(sign == 1){
            sign = 0;
            continue;
        }else break;
    }
    return head;
};