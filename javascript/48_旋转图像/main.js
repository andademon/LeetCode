/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * 顺时针旋转
 * 我的想法是一层一层旋转
 * 从最外层旋转到最中心
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * 
 * ->
 * 
 * [7,4,1]
 * [8,5,2]
 * [9,6,3]
 * 
 * temp = a[0][0]
 * a[0][0] = a[2][0] a[]
 * a[2][0] = a[2][2]
 * a[2][2] = a[0][2]
 * a[0][2] = temp
 * 
 * temp = a[0][1]
 * a[0][1] = a[1][0]
 * a[1][0] = a[2][1]
 * a[2][1] = a[1][2]
 * a[1][2] = temp
 * 
 * a[1][2] = a[0][1]
 * a[2][2] = a[0][2]
 * 
 */

    // matrix[0][i] = matrix[len - i][0];
    // matrix[len - i][0] = matrix[len][len - i];
    // matrix[len][len - i] = matrix[i][len];
    // matrix[i][len] = temp;

    /**
     * temp = matrix[1][1]
     * matrix[1][1] = matrix[2][1]
     * matrix[2][1] = matrix[2][2]
     * matrix[2][2] = matrix[1][2]
     * matrix[1][2] = temp
     * 
     * 
     * 全部转为1，然后减一就行了
     * []
     */


var rotate = function(matrix) {
    let num =  Math.floor(matrix.length / 2);//ceil向上取整,floor向下取整
    let i,n = 0;
    let len = matrix.length - 1;
    for(n = 0;n < num;n++){//n表示当前正在旋转第几层
        for(i = 0;i < len;i++){//i表示正在旋转当前层的第几个
            let temp = matrix[n][n + i];
            matrix[n][n + i] = matrix[matrix.length - 1 - n - i][n];
            matrix[matrix.length - 1 - n - i][n] = matrix[matrix.length - 1 - n][matrix.length - 1 - n - i];
            matrix[matrix.length - 1 - n][matrix.length - 1 - n - i] = matrix[n + i][matrix.length - 1 - n];
            matrix[n + i][matrix.length - 1 - n] = temp;
        }
        len -= 2;
    }
};

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

let matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
]


//第二层失败，说明中间出错了
console.log(matrix)
rotate(matrix)
console.log(matrix)
// console.log(rotate(matrix))