class ListNode{
    constructor(val,next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class MinStack {
    constructor() {
        this.stack = []; //栈数组存的是普通的栈
        this.min = new ListNode();
        this.head = this.min;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let node = this.head.next;
        let p = this.head; //node的前一个结点的指针
        if (node == null) { //只有头结点
            let tempNode = new ListNode(val);
            this.head.next = tempNode;
            return;
        }
        while (node) {//有其他结点，但是都比val小
            if (node.val > val) {
                let tempNode = new ListNode(val, p.next);
                p.next = tempNode;
                return;
            }
            p = node;
            node = node.next;
        }
        p.next = new ListNode(val);
    }
    /**
     * @return {void}
     */
    pop() {
        let node = this.head.next;
        let p = this.head;
        let val = this.stack.pop();
        while (node) {
            if (node.val == val) {
                p.next = node.next;
                break;
            }
            p = node;
            node = node.next;
        }
        return val;
    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.head.next.val;
    }
}

let minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.getMin();
minStack.pop();
minStack.getMin();





/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */