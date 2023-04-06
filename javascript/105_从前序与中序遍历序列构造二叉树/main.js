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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

//preorder -> in left right  3 9 1 2 20 15 21 7
//                           # l l r r  l  l  r 
//inorder -> left in right   1 9 2 3 15 21 20 7
//                           l l r # l  l  r  r
/**
 * 3
 * 9 20
 * 1 2 15 7
 */

// function foo(preorder, inorder){
//     if(preorder.length == 1) return new TreeNode(preorder[0]);
//     let val = preorder[0];
//     let root = new TreeNode(val);
//     for(i = 0;i < inorder.length;i++){
//         if(inorder[i] == val) break;
//     }
//     let left_in = inorder.slice(0,i);
//     let left_pre = preorder.slice(1,i + 1);
//     let right_in,right_pre;
//     if(i == inorder.length){
//         right_in = [];
//         right_pre = [];
//     }else{
//         right_in = inorder.slice(i + 1);
//         right_pre = preorder.slice(i + 2);
//     }
//     if(left_in.length == 0) root.left = null;
//     else root.left = foo(left_pre,left_in);
//     if(right_in.length == 0) root.right = null;
//     else root.right = foo(right_pre,right_in);
//     return node;
// }

//递归求解，preorder第一个一定是当前子树根结点，在inorder中找到该结点位置，前面的是左子树，后面的是右子树，再次递归
function foo(preorder, inorder){
    if(preorder.length == 1) return new TreeNode(preorder[0]);
    let val = preorder[0];
    let root = new TreeNode(val);
    for(i = 0;i < inorder.length;i++){
        if(inorder[i] == val) break;
    }
    let left_in = inorder.slice(0,i);
    let left_pre = preorder.slice(1,i + 1);
    let right_in,right_pre;
    if(i == inorder.length){
        right_in = [];
        right_pre = [];
    }else{
        right_in = inorder.slice(i + 1);
        right_pre = preorder.slice(i + 1);
    }
    if(left_in.length == 0) root.left = null;
    else root.left = foo(left_pre,left_in);
    if(right_in.length == 0) root.right = null;
    else root.right = foo(right_pre,right_in);
    return root;
}

var buildTree = function(preorder, inorder) {
    return foo(preorder,inorder);
    // let root = new TreeNode();
    // while(preorder.length && inorder.length){
    //     let node1 = preorder.pop();
    //     let node2 = inorder.pop();
    //     if(node1 == node2){
    //         let right = new TreeNode(node1);
    //     }else{
    //         let in_node = new TreeNode(node2);
    //     }
    // }
};

let preorder = [3,9,20,15,7];

let inorder = [9,3,15,20,7];

console.log(buildTree(preorder,inorder))