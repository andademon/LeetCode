/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;
    if(prices.length === 2) return (prices[1] - prices[0] > 0) ? prices[1] - prices[0] : 0;
    let array = [0];// array[i] 表示第i天股票价格 -> 第i + 1的上升趋势
    for(let i = 1;i < prices.length;i++){
        array.push(prices[i] - prices[i - 1]);
    }
    if(prices.length === 3){
        if(array[1] > 0 && array[2] > 0) return array[1] + array[2];
        else return Math.max(...array)
    }

    // let dp = (array[1] > 0)?[0,array[1]]:[0,0];
    let dp = [];
    dp[0] = 0;
    dp[1] = (array[1] > 0)?array[1]:0;
    if(array[1] > 0 && array[2] > 0){
        dp[2] = array[1] + array[2];
    }else if(array[1] < 0 && array[2] < 0){
        dp[2] = 0
    }else{
        dp[2] = Math.max(...[array[0],array[1],array[2]]);
    }

    for(let i = 3;i < array.length;i++){
        if(array[i] >= 0){//上升趋势
            if(array[i - 1] < 0){//昨日下降
                if(array[i] + array[i - 1] >= 0){//折线上升
                    dp[i] = Math.max(dp[i - 1] + (array[i] + array[i - 1]),dp[i - 3] + array[i]);
                }else if(array[i] + array[i - 1] < 0){//上升,但整体下降
                    dp[i] = Math.max(dp[i - 3] + array[i],dp[i - 1]);
                }
            }else{//昨日上升
                dp[i] = dp[i - 1] + array[i]
            }
        }else{//下降趋势
            dp[i] = dp[i - 1];
        }
    }
    console.log(dp)
    return dp.pop();
};

//[b,s,0]最少周期为三天
/**
 * [b,s,0,b,s,0,b,s,0]
 * [0,b,s,0,b,s,0,b,s]
 * [0,0,b,s,0,b,s,0,b]
 * 
 * 想用动态规划
 * dp[i]第i天最大利润
 * dp[2][i]
 * 3种状态:买、卖、冷冻期
 * 0:dp[i] = dp[i - 1]
 * 1:dp[i] = dp[i - 1] + 差价
 * 2:dp[i] = dp[i - 1]
 * 
 * 差价计算(prices[i] - 买入价格)
 * [买入价格]
 * 
 * 什么时候买入合适
 * if(prices[i + 1] <= prices[i]) 不买
 * [3,3,0,8,16]
 * 
 * [1,2,3,0,2]
 * [0,1,1,1,3]
 * [0,0,2,2,2]
 * 
 * [1,2,3,4,5]
 * [0,0,0,0,4]//如果当天买dp[i] = dp[2][i - 1]
 * [0,1,1,1,2]//如果当天卖dp[i] = dp[0][i - 1] + prices[i] - 
 * [0,0,0,0,0]//如果当天冷冻期dp[2][i] = dp[1][i - 1]
 * 
 * dp[2][i]
 * [
 * [0,0,0,1,2]
 * [0,1,2,3,4]
 * [0,0,1,2,3]
 * ]
 * 
 * 
 * 卖dp[i] = dp[i - 1] + prices[i] - 买入价格
 * 其他dp[i] = dp[i - 1]
 */

/**
 * [1,2,3,0,2]
 * [0,1,1,-3,2]
 * 
 * [1,2,3,4,5]
 * [0,1,1,1,1]
 * dp[i] = [0,1,2,2,3]
 */

let prices = [2,1,4,5,2,9,7]
console.log(maxProfit(prices))

//动态规划，分类讨论