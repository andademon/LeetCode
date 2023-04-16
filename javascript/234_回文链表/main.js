/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode{
    constructor(val, next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? 0 : val);
    }
}

function reverse(head) {
    if(head == null || head.next == null) return head;
    let tmpHead = reverse(head.next);
    head.next = null;
    let node = tmpHead;
    while(node && node.next){
        node = node.next;
    }
    node.next = head;
    return tmpHead;
}

//要求为O(n)时间复杂度和O(1)空间复杂度
//官方题解为快慢指针 + 翻转链表,满足了O(n)时间复杂度的需求但是链表本身会被修改
function fun(head){
    if(head == null || head.next == null) return true;
    let node = head;
    let slow = head,fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = slow.next;
    //slow就是第二段链表的头结点，需要原地反转该链表
    slow = reverse(slow);
    let tmpNode = slow;
    while(slow){
        if(slow.val == node.val){
            slow = slow.next;
            node = node.next;
            continue;
        }else return false;
    }
    return true;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head;
    let arr = [];
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    for(let i = 0,j = arr.length - 1;i < j;i++,j--){
        if(arr[i] == arr[j]) continue;
        else return false;
    }
    return true;
};

let head = {
    val:1,
    next:{
        val:1,
        next:{
            val:2,
            next:{
                val:1,
                next:null
            }
        }
    }
}

fun(head);