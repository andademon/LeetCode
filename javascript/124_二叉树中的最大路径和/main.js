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
 * @return {number}
 */

/**
 * 分类讨论试试
 * 一棵树中最大的路径和可能为：
 * 根 (左、右为负，根 > 左，根 > 右)
 * 左 (根、右为负，左 > 根，左 > 右) 不可累加至上一层
 * 右 (根、左为负，右 > 根，右 > 左) 不可累加至上一层
 * 根 + 左 (右为负)
 * 根 + 右 (左为负)
 * 左 + 根 + 右 (全为正 || 左右为正且根 + 左 + 右 > 左 || 右) 不可累加至上一层
 * 
 * 
 * 确实，发现一个规律，只要根为正，一定可以向上累加(最小也能累加根本身的值)
 */
function recursion(node,globalMAX){//globalMAX用数组这样穿地址的数据结构存储，因为返回值只能返回递归过程中的最大值，返回后将两者进行比较大小即可
    if(node == null) return null;
    globalMAX[0] >= node.val ? globalMAX[0] = globalMAX[0] : globalMAX[0] = node.val;
    let left = -9999,right = -9999;
    if(node.left != null){
        left = recursion(node.left,globalMAX);
    }
    if(node.right != null){
        right = recursion(node.right,globalMAX);
    }
    let max = null;
    if(node.val < 0){//根为负
        if(left != null && right != null && left >= 0 && right >= 0){//左右均为正
            // globalMAX[0] >= node.val + left + right ? globalMAX[0] = globalMAX[0] : globalMAX[0] = node.val + left + right;//局部最大结果
            globalMAX[0] >= Math.max(left,right,left + right + node.val) ? globalMAX[0] = globalMAX[0] : globalMAX[0] = Math.max(left,right,left + right + node.val);
            max = Math.max(left,right) + node.val;//可累加最大结果
            return max;
        }else if(left == null || left < 0){//左为负
            if(right != null && right > 0){//右为正
                globalMAX[0] >= right ? globalMAX[0] = globalMAX[0] : globalMAX[0] = right;
                return node.val + right;
            }else{//右为负(全为负)
                // globalMAX[0] >= node.val + left + right ? globalMAX[0] = globalMAX[0] : globalMAX[0] = Math.max(node.val,left,right);
                globalMAX[0] >= Math.max(node.val,left,right) ? globalMAX[0] = globalMAX[0] : globalMAX[0] = Math.max(node.val,left,right);
                return node.val;
            }
        }else if(right == null || right < 0){//右为负
            if(left != null && left > 0){//左为正
                globalMAX[0] >= left ? globalMAX[0] = globalMAX[0] : globalMAX[0] = left;
                return node.val + left;
            }else{//左为负(全为负)
                globalMAX[0] >= Math.max(node.val,left,right) ? globalMAX[0] = globalMAX[0] : globalMAX[0] = Math.max(node.val,left,right);
                return node.val;
            }
        }
    }else{//根为正
        if(left == null || left <= 0){//左为负
            if(right == null || right < 0 ){//右为负
                max = node.val;
                return node.val;
            }else{//右为正
                max = node.val + right;
                return max;//可以累加至上一层，直接返回就行
            }
        }else if(right == null || right < 0){//右为负
            if(left == null || left <= 0){
                max = node.val;
                return max;
            }else{
                max = node.val + left;
                return max;//同理，可以累加
            }
        }else{//左右均为正，最大值应为根 + 左 + 右，但是想要在递归中累加只能返回根 + 左 || 根加右中的最大值
            globalMAX[0] >= node.val + left + right ? globalMAX[0] = globalMAX[0] : globalMAX[0] = node.val + left + right;
            return Math.max(node.val + left,node.val + right);//返回可累加结果
        }
    }
}

var maxPathSum = function(root) {
    if(root.left == null && root.right == null){
        return root.val;
    }
    let globalMAX = [-1001];
    let max = recursion(root,globalMAX);
    if(max == undefined) return globalMAX[0];
    return Math.max(max,globalMAX[0]);
};

// let tree = {
//     val:-1,
//     left:{
//         val:0,
//         left:null,
//         right:null
//     },
//     right:{
//         val:1,
//         left:null,
//         right:null
//     }
// }

// let tree = {
//     val:-10,
//     left:{
//         val:9,
//         left:null,
//         right:null
//     },
//     right:{
//         val:20,
//         left:{
//             val:15,
//             left:null,
//             right:null
//         },
//         right:{
//             val:7,
//             left:null,
//             right:null
//         }
//     }
// }


// let tree = {
//     val:2,
//     left:{
//         val:-1,
//         left:null,
//         right:{
//             val:-5,
//             left:{
//                 val:7,
//                 left:null,
//                 right:null
//             },
//             right:{
//                 val:0,
//                 left:null,
//                 right:null
//             }
//         }
//     },
//     right:null
// }


let tree = {
    val:-4,
    left:{
        val:-5,
        left:{
            val:5,
            left:null,
            right:null
        },
        right:null
    },
    right:{
        val:4,
        left:{
            val:3,
            left:{
                val:6,
                left:{
                    val:2,
                    left:null,
                    right:null
                },
                right:{
                    val:-2,
                    left:null,
                    right:null
                }
            },
            right:null
        }
    }
}

console.log(maxPathSum(tree))