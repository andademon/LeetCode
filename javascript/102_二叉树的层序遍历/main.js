/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    let rs = [];
    let deque = [];
    deque.push(root);
    while(deque.length){
        let len = deque.length;
        let i = 0;
        let array = new Array();
        while(i < len){
            let node = deque.shift();
            if(node.left != null) deque.push(node.left);
            if(node.right != null) deque.push(node.right);
            array.push(node.val);
            i++;
        }
        rs.push(array);
    }
    return rs;
};

let root = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}

console.log(levelOrder(root))