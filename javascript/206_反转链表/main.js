/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode{
    constructor(val,next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : val);
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//通过栈进行迭代
var reverseList = function(head) {
    let tmpHead = new ListNode();//添加一个空结点方便遍历
    let tmpNode = tmpHead;
    let node = head;
    let stack = [];
    while(node){
        stack.push(node);//栈内存放所有结点
        node = node.next;
    }
    while(stack){
        let p = stack.pop();
        p.next = null;
        tmpNode.next = p;
        tmpNode = tmpNode.next;
    }
    return tmpHead.next;
};

let head = new ListNode(0);
let node = head;
let arr = [1,2,3,4,5];
while(arr.length){
    node.next = new ListNode(arr.shift());
    node = node.next;
}

console.log(head);

reverseList(head)