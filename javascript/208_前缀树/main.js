class TreeNode{
    constructor(val,sign){
        this.val = val ?? 0;
        this.isEnd = sign ?? false;
        this.child = [];
    }
    getChild(c){
        for(let i = 0;i < this.child.length;i++){
            if(this.child[i].val === c) return this.child[i];
        }
        return null;
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        let deque = [...word];
        while(deque.length){
            let child = node.getChild(deque[0]);
            if(child != null){
                node = child;
            }else{
                let newChild = new TreeNode(deque[0]);
                node.child.push(newChild);
                node = newChild;
            }
            deque.shift();
        }
        node.isEnd = true;
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        let deque = [...word];
        while(deque.length){
            let child = node.getChild(deque[0]);
            if(child != null){
                node = child;
            }else{
                return false;
            }
            deque.shift();
        }
        if(node.isEnd == true) return true;
        return false;
    }
    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        let deque = [...prefix];
        while(deque.length){
            let child = node.getChild(deque[0]);
            if(child != null){
                node = child;
            }else{
                return false;
            }
            deque.shift();
        }
        return true;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))
console.log(trie.search("app"))





/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */