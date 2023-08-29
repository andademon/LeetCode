/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    coins.sort((a,b) => a - b)
    while(coins.length){
        let temp = coins.pop();
        if(temp > amount) continue;
        else{
            coins.push(temp)
            break;
        }
    }
    if(coins.length == 0) return -1;

    let dp = new Array(amount + 1).fill(-1);
    for(let i = 0;i < coins.length;i++){
        dp[coins[i]] = 1;
    }

    for(let i = 0;i < dp.length;i++){
        let temp = getTempArray(dp,i,coins);
        // if(temp.length !== 0){
        //     let tempMin = Math.min(...temp) + 1;
        //     if(dp[i] === -1) dp[i] = tempMin;
        //     else dp[i] = Math.min(tempMin,dp[i])
        // }
        dp[i] = (temp.length) ? ((dp[i] === -1) ? Math.min(...temp) + 1:Math.min(Math.min(...temp) + 1,dp[i])) : dp[i];
    }
    return dp[amount];
};

//动态规划
//dp[i]表示i元所需最小硬币数
//dp[i] = Math.min(dp[i] - coins[coins.length - 1],...,dp[i] - coins[0]) + 1 || -1;

//[1,2,5]
//[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
//[-1,1,1,2,2,1,2,2,3,3,2,3]

function getTempArray(dp,i,coins){
    let temp = [];
    let j = 0;
    while(i > coins[j] && j < coins.length){
        if(dp[i - coins[j]] !== -1) temp.push(dp[i - coins[j]]);
        j++;
    }
    return temp;
}

// let coins = [1,2,5]
// let amount = 11;

let coins = [216,94,15,86];
let amount = 5372;

// let coins = [186,419,83,408];
// let amount = 6249;

console.log(coinChange(coins,amount));

//一开始想用回溯，感觉会超时，就用动态规划了