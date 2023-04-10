/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
class TreeNode{
    constructor(val){
        this.val = val ? val : null;
        this.isEnd = false;
        this.child = new Array();
    }
    contains(val){
        for(let i = 0;i < this.child.length;i++){
            if(this.child[i].val == val) return true;
        }
        return false;
    }
    getChild(val){
        for(let i = 0;i < this.child.length;i++){
            if(this.child[i].val == val) return this.child[i];
        }
        return null;
    }
}

class Tree{
    constructor(){
        this.root = new TreeNode();
    }
    insert(str){
        let node = this.root;
        for(let i = 0;i < str.length;i++){
            let child = node.getChild(str[i]);
            if(child != null){
                node = child;
                continue;
            }else{
                while(i < str.length){
                    let tempNode = new TreeNode(str[i]);
                    node.child.push(tempNode);
                    node = tempNode;
                    i++;
                }
                node.isEnd = true;
                break;
            }
        }
    }
}

function recursion(s,wordDict){
    let str = "";
    for(let i = 0;i < s.length;i++){
        str += s[i];
        if(wordDict[str] != undefined){
            if(i == s.length - 1) return true;
            let rs = recursion(s.slice(i + 1),wordDict);
            if(rs == true) return true;
            else continue;
        }
    }
    return false;
}
var wordBreak = function(s, wordDict) {
    let hashMap = {};
    for(let i = 0;i < wordDict.length;i++){
        hashMap[wordDict[i]] = 1;
    }
    //需要将哈希表优化为最小可拆分单元
    for(key in hashMap){
        delete hashMap[key];
        if(!recursion(key,hashMap)){
            hashMap[key] = 1;
        }
    }
    //还是超时，需要优化为不回溯的算法
    let tree = new Tree();
    for(key in hashMap){//根据最小哈希表构造前缀树
        tree.insert(key);
    }
    console.log(tree)
    let temp = "";
    for(let i = 0;i < s.length;i++){
        temp += s[i];
        if(hashMap[temp] != undefined){
            
        }
    }
    // return recursion(s,hashMap);
};

// let wordDict = ["cats", "dog", "sand", "and", "cat","og"];
// let s = "catsandog";
// let wordDict = ["a","aa","aaa","aaaa","aaaaa"];
// let s = "aaaaab";

let wordDict = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"];
let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

console.log(wordBreak(s,wordDict))