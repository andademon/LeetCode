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
 * @return {number[]}
 */

function fun(node,array){
    if(node){
        fun(node.left,array);
        array.push(node.val);
        fun(node.right,array);
    }
}

var inorderTraversal = function(root) {
    let rs = [];
    fun(root,rs);
    return rs;
};

let root = {
    val:1,
    left:null,
    right:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null
        },
        right:null
    }
}

console.log(inorderTraversal(root))