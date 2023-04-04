
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function backtracing(root,array){
    if(root){
        backtracing(root.left,array);
        array.push(root.val);
        backtracing(root.right,array);
    }
}

var isValidBST = function(root) {
    let array = [];
    backtracing(root,array);
    console.log(array)
    for(let i = 1;i < array.length;i++){
        if(array[i] > array[i - 1]) continue;
        else return false;
    }
    return true;
};

let root = {
    val:2,
    left:{
        val:2,
        left:null,
        right:null
    },
    right:{
        val:2,
        left:null,
        right:null
    }
}

console.log(isValidBST(root))