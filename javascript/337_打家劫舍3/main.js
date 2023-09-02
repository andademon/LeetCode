/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    let max = recurse(root);
    return Math.max(...max);
};

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function recurse(root){
    if(root.left === null && root.right === null){
        return [root.val,0];
    }
    let leftv = (root.left)? recurse(root.left): [0,0];
    let rightv = (root.right)? recurse(root.right): [0,0];
    let max1 = root.val + leftv[1] + rightv[1];
    let max2 = Math.max(...leftv) + Math.max(...rightv);
    return [max1,max2];
}

/**
 * 想法：构造一个函数，形参为树的根节点，返回这个树的理论最大盗取值(两个，分别为包含根节点和不包含根节点)
 * [max,norootmax]
 * max1 = lnorootmax + rnorootmax;
 * max2 = lmax + rmax;
 */

// let root = {
//     val: 3,
//     left: {
//         val: 4,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 5,
//         left: null,
//         right: {
//             val: 1,
//             left: null,
//             right: null
//         }
//     }
// }

let root = {
    val: 4,
    left: {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right:null
            },
            right: null
        },
        right:null
    },
    right: null
}

console.log(rob(root))