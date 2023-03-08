/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

//辅助函数，翻转一段链表，并返回该链表的头结点
function reverse(list){
    const newHead = new ListNode(0);
    newHead.next = list;
    let temp = newHead.next;
    let list_array = [];
    while(temp){
        let save = temp;
        temp = temp.next;
        save.next = null;
        list_array.push(save);
    }
    console.log(list_array)
    let temp2 = newHead;
    while(list_array.length != 0){
        temp2.next = list_array.pop();
        temp2 = temp2.next;
    }
    return newHead.next;
}

//翻转链表需要记录几个结点?
//1.初始结点
//2.初始结点的前一结点
//3.结束位置结点的下一结点

/**
 * [1,2,3,4]
 * temp = [0].end,count = 0
 * count = 1
 * count = 2
 * [0,1,2,3,4]
 * [0,3,4]
 * [1,2]
 * [2,1]
 * [0].next = [return]
 * [return.end].next = [3,4].start
 * temp = [1,2].end
 */

var reverseKGroup = function(head, k) {
    const newHead = new ListNode(0);
    newHead.next = head;
    let temp = newHead;
    let node1,node2;
    while(temp){
        node1 = temp;//记录初始结点
        node2 = temp.next;
        let count = 0;
        while(count < k && temp){
            temp = temp.next;
            count++;
        }
        if(count < k || temp == null) break;
        if(!temp) break;//如果temp已经是空结点就break;
        let node3 = temp;
        let node4 = temp.next;//node3记录temp的后一个结点
        node3.next = null;//这里相当于把原来的链表切断了，需要想办法把链表接上去

        console.log(node3)//[1,2,3,4]
        console.log(temp)//[3,4]
        console.log(node2)//[1,2,3,4]
        node2 = reverse(node2);

        node1.next = node2;
        while(node2.next){
            node2 = node2.next;
        }
        node2.next = node4;
        temp = node2
        // console.log(node2)
        // console.log(node4)
        // return newHead.next
        // return
        // // console.log(`node1 = ${node1}`)
        // // console.log(`node2 = ${node2}`)
        // // console.log(`node3 = ${node3}`)
        // // console.log(`temp = ${temp}`)
        // console.log(temp)
        // node2 = reverse(node2);
        // console.log(node2)
        // return undefined
        // // node1.next = node2;
        // node2.next = node3;
        // // console.log(temp)
        // return newHead.next;
        // // else{
            
        // // }
        // // return temp;
    }
    return newHead.next;
};

let list = {
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

console.log(reverseKGroup(list,2))

/**最后通过的用例 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverse(list){
    const newHead = new ListNode(0);
    newHead.next = list;
    let temp = newHead.next;
    let list_array = [];
    while(temp){
        let save = temp;
        temp = temp.next;
        save.next = null;
        list_array.push(save);
    }
    let temp2 = newHead;
    while(list_array.length != 0){
        temp2.next = list_array.pop();
        temp2 = temp2.next;
    }
    return newHead.next;
}

var reverseKGroup = function(head, k) {
    const newHead = new ListNode(0);
    newHead.next = head;
    let temp = newHead;
    let node1,node2;
    while(temp){
        node1 = temp;//记录初始结点
        node2 = temp.next;
        let count = 0;
        while(count < k && temp){
            temp = temp.next;
            count++;
        }
        if(count < k || temp == null) break;//有这种可能的，就是count == k 时temp == null，说明长度还是不够;只有count == k 且temp != null时才能继续进行
        let node3 = temp;
        let node4 = temp.next;//node3记录temp的后一个结点
        node3.next = null;//这里相当于把原来的链表切断了，需要想办法把链表接上去
        node2 = reverse(node2);

        node1.next = node2;
        while(node2.next){
            node2 = node2.next;
        }
        node2.next = node4;
        temp = node2
    }
    return newHead.next;
};