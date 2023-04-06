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
var maxDepth = function(root) {
    let deque = [];
    let count = 0;
    if(root) deque.push(root);
    else return 0;
    while(deque.length){
        for(let i = 0,len = deque.length;i < len;i++){
            let node = deque.shift();
            if(node.left) deque.push(node.left);
            if(node.right) deque.push(node.right);
        }
        count++;
    }
    return count;
};