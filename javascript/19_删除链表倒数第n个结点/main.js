/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class List {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }
}


class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// var removeNthFromEnd = function(head, n) {
//     let i,count,temp,temp2,temp_pre,temp_next;
//     temp = head;
//     while(temp){
//         temp2 = temp;
//         temp = temp.next;
//         temp.pre = temp2;
//         count++;
//     }
//     head.pre = temp2;
//     temp = head;
//     for(i = 0;i < n;i++){
//         temp = temp.pre;
//     }
//     temp_pre = temp.pre;
//     temp_next = temp.next;
//     temp_pre.next = temp_next;
//     temp_next.pre = temp_pre;
//     return head;
// };

var removeNthFromEnd = function (head, n) {
    let i, temp, count = 0;
    temp = head;
    while (temp) {
        console.log(temp)
        temp = temp.next;
        count++;
    }
    if (count == 1) return null;
    temp = head;
    if(count - n == 0){
        head = head.next;
        return head;
    }
    for (i = 1; i < count - n; i++) {
        temp = temp.next;
    }
    if (!temp.next.next) temp.next = null;
    else temp.next = temp.next.next;
    return head;
};

//head = [1,2,3,4,5]

// let list = {
//     "val": 1,
//     "next": {
//         "val": 2,
//         "next": {
//             "val": 3,
//             "next": {
//                 "val": 4,
//                 "next": {
//                     "val": 5,
//                     "next": null
//                 }
//             }
//         }
//     }
// }

let list = {
    "val": 1,
    "next": {
        "val": 2,
        "next": null
    }
}

console.log(removeNthFromEnd(list,2))