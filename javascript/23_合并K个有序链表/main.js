/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists) {
    let array = [];
    for(let i = 0;i < lists.length;i++){
        let temp_list = lists[i];
        while(temp_list){
            array.push(temp_list.val);
            temp_list = temp_list.next;
        }
    }
    array.sort((a,b) => a-b);
    let rs = new ListNode();
    rs.next = new ListNode();
    let head = rs;
    for(num of array){
        rs.next
    }
    return head;
};