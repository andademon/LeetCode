/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode();
    let i = list1, j = list2, head = list3;
    if(i.val == 0) return j;
    if(j.val == 0) return i;
    while(i && j){
        if(i.val < j.val){
            list3.val = i.val;
            i = i.next;
            console.log(i)
        }else{
            list3.val = j.val;
            j = j.next;
            console.log(j)
        }
        list3.next = new ListNode();
        list3 = list3.next;
    }
    if(i){
        list3.val = i.val;
        list3.next = i.next
    }else if(j){
        list3.val = j.val;
        list3.next = j.next;
    }
    return head;
};

// list1 = {
//     val:1,
//     next:{
//         val:2,
//         next:{
//             val:4,
//             next:null
//         }
//     }
// }

// list2 = {
//     val:1,
//     next:{
//         val:3,
//         next:{
//             val:4,
//             next:null
//         }
//     }
// }

// list1 = {
//     val:0,
//     next:null
// }

// list2 = {
//     val:0,
//     next:null
// }

list1 = {
    val:4,
    next:null
}

list2 = {
    val:4,
    next:null
}

console.log(mergeTwoLists(list1,list2))