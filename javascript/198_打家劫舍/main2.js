/**
 * @param {number[]} nums
 * @return {number}
 */
//递归时间复杂度过高，需要一个不递归的解法
//所有递归不是都能转栈吗
var rob = function(nums) {
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0],nums[1]);
    let dp = new Array(nums.length + 1);
    //状态转移方程，每个dp[k]只与dp[k - 1],dp[k - 2]有关
    dp[0] = 0;//为了处理边界条件，dp[0]用于存0值
    dp[1] = nums[0];
    for(let i = 0;i <= nums.length;i++){
        dp[i] = Math.max(dp[i - 1],dp[i - 2] + nums[i - 1]);    
    }
    return dp[nums.length];
};