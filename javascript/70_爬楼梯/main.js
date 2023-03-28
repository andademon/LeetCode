/**
 * @param {number} n
 * @return {number}
 */

//动态规划两要素：状态转移方程、边界条件

/**
 * 1,1,1,1
 * 1,2,1
 * 2,1,1
 * 1,1,2
 * 2,2
 * 
 */


var climbStairs = function(n) {
    let dp = new Array(n);
    if(n == 1) return 1;
    dp[0] = 1;
    dp[1] = 2;
    for(let i = 1;i < n;i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n-1];
};