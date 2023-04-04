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
 * @return {boolean}
 */

//迭代法
var isSymmetric = function(root) {
    let deque = [];
    deque.push(root);
    let i = 0;
    while(deque.length != 0){
        i = 0;
        let len = deque.length;
        let array = [];
        while(i < len){
            root = deque.shift();
            if(root != null){
                deque.push(root.left);
                deque.push(root.right);
            }else{
                
            }
            array.push(root ? root.val : null);
            i++;
        }
        for(let i = 0,j = array.length - 1;i < j;i++,j--){
            if(array[i] != array[j]) return false;
        }
    }
    return true;
};