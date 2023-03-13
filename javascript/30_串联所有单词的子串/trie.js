//字典树
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
                    }
                    node = snode;
                    break;
                }
            }
        }
    }
}