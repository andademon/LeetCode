/**
 * @param {number[]} nums
 * @return {boolean}
 */

//我的想法是从最后一个点开始往前判断
//ps:其实这题也是动态规划，dp[i] = max{dp[i-1],i + nums[i]},我只是反过来遍历罢了
var canJump = function(nums) {
    let targrt = nums.length - 1;
    for(let j = nums.length - 1;j >= 0;j--){
        if(nums[j] >= targrt - j){
            if(j == 0) return true;
            targrt = j;
        }
    }
    return false;
};