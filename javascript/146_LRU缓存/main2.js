
class ListNode{
    constructor(key,val){
        this.key = key ?? null;
        this.val = val ?? null;
        this.next = null;
        this.pre = null;
    }
}
/**
 * @param {number} capacity
 */
//哈希表+双向链表
class ListNode{
    constructor(key,val){
        this.key = key ?? null;
        this.val = val ?? null;
        this.next = null;
        this.pre = null;
    }
}
/**
 * @param {number} capacity
 */
//哈希表+双向链表
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.head = new ListNode();
        this.tail = this.head;
        this.map = new Map();
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            if(node.next != null){
                node.next.pre = node.pre;
                node.pre.next = node.next;
                this.tail.next = node;
                node.next = null;
                node.pre = this.tail;
                this.tail = this.tail.next;
            }
            return node.val;
        } else return -1;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.get(key) != null){
            let node = this.map.get(key);
            node.val = value;
            if(node.next != null){
                node.next.pre = node.pre;
                node.pre.next = node.next;
                this.tail.next = node;
                node.pre = this.tail;
                node.next = null;
                this.tail = this.tail.next;
            }
            return
        }
        if(this.map.size == this.capacity){
            let node = this.head.next;
            if(node.next != null){//有一种特殊情况，LRUcathe空间为1，则node.next == null;
                node.next.pre = node.pre;
                this.head.next = node.next;
            }else{
                this.tail = this.head;
                this.head.next = null;
            }
            this.map.delete(node.key);
            node = null;
        }
        let node = new ListNode(key,value);
        node.pre = this.tail;
        this.tail.next = node;
        this.tail = this.tail.next;
        this.map.set(key,node);     
    }
}

let lru = new LRUCache(2);
console.log(lru.capacity)
lru.put(1,0)
lru.put(2,2)
console.log(lru)
lru.get(1)
console.log(lru)
lru.put(3,3)
console.log(lru)
lru.get(2);
console.log(lru)
console.log([lru.map.size])
lru.put(4,4)
console.log(lru)
lru.get(1)



let map = new Map();
map.set(1,1)
map.set(2,2)
console.log(map.size)
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */