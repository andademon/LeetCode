/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/**
 * 我第一个想到的就是字典树
 */

class TrieNode {
    constructor(value){
        this.value = (value === undefined ? null : value);
        this.son = [];
    }
    findNode(value){
        for(let i = 0;i < this.son.length;i++){
            const node = this.son[i];
            if(node.value === value){
                return node;
            }
        }
        return null;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
        this.sign = 0;
    }
    insert(str){
        let node  = this.root;
        for(let i = 0;i < str.length;i++){
            let snode = node.findNode(str[i]);
            if(snode == null){
                snode = new TrieNode(str[i]);
                node.son.push(snode);
            }
            node = snode;
        }
    }
    has(str){
        let node = this.root;
        for(let i = 0;i < str.length;i++){
            const snode = node.findNode(str[i]);
            if(snode){
                node = snode;
            }else{
                return false;
            }
        }
        return true;
    }
    remove(str){
        let node = this.root;
        for(let i = 0;i < str.length;i++){
            for(let j = 0;j < node.son.length;j++){
                if(node.son[j].value === str[i]){
                    let snode = node.son[j];
                    if(snode.son.length === 1){
                        delete node.son[j];
                        return
                    }
                    node = snode;
                    break;
                }
            }
        }
    }
}

var findSubstring = function(s, words) {
    let len = words[0].length;
    let rs = [];
    let trie = new Trie();
    let i = 0;
    for(let i = 0;i < words.length;i++){
        trie.insert(words[i]);
    }
    while(i < s.length){
        if(trie.root.son.length === 0){
            rs.push(i-len*words.length);
            trie = new Trie();
            for(let i = 0;i < words.length;i++){
                trie.insert(words[i]);
            }
        }
        let temp = s.slice(i,i+len);
        if(trie.has(temp)){
            trie.remove(temp);
            trie.sign = 1;
            i = i + len;
            continue;
        }else{
            if(trie.sign === 1){//说明字典树已经被修改了，要重新建立
                trie = new Trie();
                for(let i = 0;i < words.length;i++){
                    trie.insert(words[i]);
                }
            }
            i++;
        }
    }
    return rs;
};

let s = "barfoothefoobarman";
let words = ["foo","bar"];

console.log(findSubstring(s,words))