class ListNode{
    constructor(val,next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class MaxStack {
    constructor() {
        this.stack = []; //栈数组存的是普通的栈
        this.max = new ListNode();
        this.head = this.max;
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
        while (node) {//有其他结点，但是都比val大
            if (node.val < val) {
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
     * @return {number}
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
    // /**
    //  * @return {number}
    //  */
    // shift(){
    //     while
    // }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }
    /**
     * @return {number}
     */
    getMax() {
        return this.head.next.val;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//暴力方法，超时
// var maxSlidingWindow = function(nums, k) {
//     let rs = [];
//     let window = [];
//     for(let i = 0;i < k;i++){
//         window.push(nums[i]);
//     }
//     rs.push(Math.max(...window));
//     for(let i = k;i < nums.length;i++){
//         window.shift();
//         window.push(nums[i]);
//         rs.push(Math.max(...window));
//     }
//     return rs;
// };

class MaxDeque{
    constructor(){
        this.deque = [];
        this.max = new ListNode();
        this.head = this.max;
    }
    push(val){
        this.deque.push(val);
        if(this.head.next == null){
            let node = new ListNode(val);
            this.head.next = node;
            return;
        }
        let node = this.head.next;
        let p = this.head;
        while(node){
            if(node.val < val){
                let tmpNode = new ListNode(val,p.next);
                p.next = tmpNode;
                return;
            }
            p = node;
            node = node.next;
        }
        p.next = new ListNode(val);
        return;
    }
    shift(){
        let val = this.deque.shift();
        let node = this.head.next;
        let p = this.head;
        while(node){
            if(node.val == val){
                p.next = node.next;
                break;
            }
            p = node;
            node = node.next;
        }
        return val;
    }
    getMax(){
        return this.head.next.val;
    }
}
//最大栈，超时
// var maxSlidingWindow = function(nums, k) {
//     let maxDeque = new MaxDeque();
//     let rs = [];
//     for(let i = 0;i < k;i++){
//         maxDeque.push(nums[i]);
//     }
//     rs.push(maxDeque.getMax());
//     for(let i = k;i < nums.length;i++){
//         maxDeque.shift();
//         maxDeque.push(nums.val);
//         rs.push(maxDeque.getMax());
//     }
//     return rs;
// };

/**
 * 什么是单调队列？
 * 遍历nums数组时，当一个数的下标比你小，但是数却比你大时，滑动窗口中最大的值永远不可能是你
 * 单调队列：如果你35岁是个p6，发现组里社招了个28岁的p7，那你就永无出头之日，可以滚粗了
 */


//单调队列，超出时间限制
var maxSlidingWindow = function(nums, k) {
    let deque = [];
    let rs = [];
    for(let i = 0;i < k;i++){
        while(deque.length != 0 && deque[deque.length - 1].num < nums[i]){
            deque.pop();
        }
        deque.push({num:nums[i],index:i});
    }
    rs.push(deque[0].num);
    for(let i = k;i < nums.length;i++){
        while(deque.length != 0 && deque[deque.length - 1].num < nums[i]){
            deque.pop();
        }
        deque.push({num:nums[i],index:i});
        if(i - k + 1> deque[0].index) deque.shift();
        rs.push(deque[0].num);
    }
    return rs;
};

//力扣官方题解
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }

    const ans = [nums[q[0]]];
    for (let i = k; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        while (q[0] <= i - k) {
            q.shift();
        }
        ans.push(nums[q[0]]);
    }
    return ans;
};

// let nums = [1,3,-1,-3,5,3,6,7];
let nums = [1,-1];
console.log(maxSlidingWindow(nums,1));