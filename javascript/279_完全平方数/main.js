/**
 * @param {number} n
 * @return {number}
 */
//是动态规划吗
var numSquares = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    for(let i = 1;i < dp.length;i++){
        let num = Math.sqrt(i);
        let floor_num = Math.floor(num);
        if(floor_num == num){
            dp[i] = 1;
        }else{
            let min = dp[i - 1] + 1;
            for(let k = 1;k <= floor_num;k++){
                if(min > dp[i - Math.pow(k,2)] + 1) min = dp[i - Math.pow(k,2)] + 1;
            }
            dp[i] = min;
        }
    }
    return dp[n];
};

console.log(numSquares(12))