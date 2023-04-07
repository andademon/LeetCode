/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = new Array(prices.length);
    dp[0] = 0;
    let min = prices[0];
    for(let i = 1;i < prices.length;i++){
        if(prices[i] <= prices[i - 1]){
            dp[i] = dp[i - 1];
            if(prices[i] < min) min =  prices[i];
        }
        else{
            dp[i] = Math.max(prices[i] - min,dp[i - 1]);
        }
    }
    return dp.pop();
};