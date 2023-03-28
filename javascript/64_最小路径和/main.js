/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {//动态规划
    let dp = new Array(grid.length);
    for(let i = 0;i < grid.length;i++){
        dp[i] = new Array(grid[0].length).fill(0);
    }
    for(let i = 0;i < grid.length;i++){
        if(i == 0) dp[i][0] = grid[i][0];
        else dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for(let i = 0;i < grid[0].length;i++){
        if(i == 0) dp[0][i] = grid[0][i];
        else dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for(let i = 1;i < grid.length;i++){
        for(let j = 1;j < grid[0].length;j++){
            dp[i][j] = Math.min(dp[i - 1][j],dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
};

let grid = [[1,3,1],[1,5,1],[4,2,1]];

console.log(minPathSum(grid))