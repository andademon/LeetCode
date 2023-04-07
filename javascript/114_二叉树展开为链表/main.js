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
 * @return {void} Do not return anything, modify root in-place instead.
 */


//通过递归进行原地旋转
function fun(node){
    if(node.left && node.right){//node既有左侧结点又有右侧结点
        let r = node.right;
        let l = node.left;
        node.right = fun(node.left);
        node.left = null;
        let root = node;
        while(node.right){
            node = node.right;
        }
        node.right = fun(r);
        return root;
    }else if(node.left){//node只有左侧结点
        node.right = fun(node.left);
        node.left = null;
    }else if(node.right){//node只有右侧结点
        node.right = fun(node.right);
    }
    return node;
}

var flatten = function(root) {
    if(root == null) return null;
    return fun(root);
};


let tree = {
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null
        },
        right:{
            val:4,
            left:null,
            right:null
        }
    },
    right:{
        val:5,
        left:null,
        right:{
            val:6,
            left:null,
            right:null
        }
    }
}

console.log(flatten(tree))