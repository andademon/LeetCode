/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let count = 0;
    let dp = new Array(matrix.length);//dp[i][j]表示以i,j为右下角的最大矩形边长
    for(let i = 0;i < matrix.length;i++){
        dp[i] = new Array(matrix[0].length).fill(0);
    }
    for(let i = 0;i < matrix.length;i++){
        dp[i][0] = parseInt(matrix[i][0]);
        count = Math.max(count,dp[i][0]);
    }
    for(let j = 0;j < matrix[0].length;j++){
        dp[0][j] = parseInt(matrix[0][j]);
        count = Math.max(count,dp[0][j]);
    }
    for(let i = 1;i < matrix.length;i++){
        for(let j = 1;j < matrix[0].length;j++){
            if(matrix[i][j] == '1' && dp[i - 1][j - 1] > 0 && dp[i - 1][j] > 0 && dp[i][j - 1] > 0){
                dp[i][j] = Math.min(dp[i - 1][j - 1],dp[i - 1][j],dp[i][j - 1]) + 1;
                count = Math.max(count,dp[i][j]);
            }else{
                dp[i][j] = parseInt(matrix[i][j]);
                count = Math.max(count,dp[i][j]);
            }
        }
    }
    return Math.pow(count,2);
};

// let matrix = [
//     ["1","0","1","0","0"],
//     ["1","0","1","1","1"],
//     ["1","1","1","1","1"],
//     ["1","0","0","1","0"]
// ];

// let matrix = [
//     ["1","1","1","1","0"],
//     ["1","1","1","1","0"],
//     ["1","1","1","1","1"],
//     ["1","1","1","1","1"],
//     ["0","0","1","1","1"]
// ]

let matrix = [
    ["0","0","0","1"],
    ["1","1","0","1"],
    ["1","1","1","1"],
    ["0","1","1","1"],
    ["0","1","1","1"]
];

console.log(maximalSquare(matrix))