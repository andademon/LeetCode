/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//递归会超出时间限制，必须想一个其他方法

// function backTracing(x,y,endx,endy,rs){
//     // console.log(x,y);
//     if(x == endx && y == endy){
//         rs[0]++;
//         // console.log("-----------");
//         return;
//     }else{
//         if(x == endx){
//             backTracing(x,y + 1,endx,endy,rs);
//         }else if(y == endy){
//             backTracing(x + 1,y,endx,endy,rs);
//         }else{
//             backTracing(x + 1,y,endx,endy,rs);
//             backTracing(x,y + 1,endx,endy,rs);
//         }
//     }
// }

// var uniquePaths = function(m, n) {
//     let rs = [0];
//     backTracing(1,1,m,n,rs);
//     return rs[0];
// };

var uniquePaths = function(m, n) {//动态规划,dp[i]表示到达该位置的路线个数，时间复杂度O(m*n)
    let dp = new Array(m);
    for(let i = 0;i < dp.length;i++){
        dp[i] = new Array(n).fill(0);
    }
    for(let i = 0;i < m;i++){
        dp[i][0] = 1;
    }
    for(let j = 0;j < n;j++){
        dp[0][j] = 1;
    }
    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}

console.log(uniquePaths(3,3))