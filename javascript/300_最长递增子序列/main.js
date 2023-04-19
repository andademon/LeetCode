/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length);//dp[i]为以nums[i]结尾的子序列的最大长度(子序列必定包含nums[i])
    dp[0] = 1;
    for(let i = 1;i < nums.length;i++){
        let max = 1;
        for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]) max = Math.max(max,dp[j] + 1);
        }
        dp[i] = max;
    }
    let rs = dp[0];
    for(let i = 1;i < nums.length;i++){
        if(dp[i] > rs) rs = dp[i];
    }
    return rs;
};