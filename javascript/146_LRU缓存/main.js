/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.stack = new Array(capacity);
    this.arrayIndexMap = new Map;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        for(let i = 0;i < this.stack.length;i++){
            if(this.stack[i] == key){
                this.stack.splice(i,1);
                break;
            }
        }
        this.stack.push(key);
        return this.map.get(key);
    }else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key) != -1){
        this.map.set(key,value)
        return
    }
    if(this.stack.length == this.capacity){
        let old_key = this.stack.shift();
        this.map.delete(old_key);
    }
    this.map.set(key,value);
    this.stack.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */