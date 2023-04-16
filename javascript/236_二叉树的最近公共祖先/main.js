/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function recursion(root,p,q){
    if(root == null) return null;
    let sign1 = {
        has_p:false,
        has_q:false,
        root:null
    },sign2 = {
        has_p:false,
        has_q:false,
        root:null
    },sign = {
        has_p:false,
        has_q:false,
        root:null
    };
    if(root.left != null){
        sign1 = recursion(root.left,p,q);
        if(sign1.root != null) return sign1;
    }
    if(root.right != null){
        sign2 = recursion(root.right,p,q);
        if(sign2.root != null) return sign2;
    }
    if(root.val == p || sign1.has_p == true || sign2.has_p == true) sign.has_p = true;
    if(root.val == q || sign1.has_q == true || sign2.has_q == true) sign.has_q = true;
    if(sign.has_p == true && sign.has_q == true){
        sign.root = root.val;
    }
    return sign;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return recursion(root,p,q).root;
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

console.log(lowestCommonAncestor(root,2,3))

// function recursion(root,p,q){
//     if(root == null) return null;
//     let sign1 = {
//         has_p:false,
//         has_q:false,
//         root:null
//     },sign2 = {
//         has_p:false,
//         has_q:false,
//         root:null
//     },sign = {
//         has_p:false,
//         has_q:false,
//         root:null
//     };
//     if(root.left != null){
//         sign1 = recursion(root.left,p,q);
//         if(sign1.root != null) return sign1;
//     }
//     if(root.right != null){
//         sign2 = recursion(root.right,p,q);
//         if(sign2.root != null) return sign2;
//     }
//     if(root == p || sign1.has_p == true || sign2.has_p == true) sign.has_p = true;
//     if(root == q || sign1.has_q == true || sign2.has_q == true) sign.has_q = true;
//     if(sign.has_p == true && sign.has_q == true){
//         sign.root = root;
//     }
//     return sign;
// }
