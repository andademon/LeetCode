/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n + 1).fill(0);//dp[i]用于存放n个结点构成子树的个数
    /**
     * 1为根结点，则0个结点在它左子树上,n-1个结点在它右子树上
     * 2为根结点，则1个结点在它左子树上,n-2个结点在它右子树上
     * ...
     * dp[n] = dp[0] * dp[n - 1] + dp[1] * dp[n - 2] + ... + dp[n - 1] * dp[0]
     */
    dp[0] = 1;
    for(let i = 1;i <= n;i++){
        for(let l = 0,r = i - 1;l < i;l++,r--){
            dp[i] += dp[l]*dp[r];
        }
    }
    return dp[n];
};

console.log(numTrees(4))