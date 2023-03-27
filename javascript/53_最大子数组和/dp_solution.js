/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 我的天，动态规划做这题怎么这么巧妙，看来我得好好培养一下算法思想
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length)//dp[i]表示以nums[i]结尾的连续子数组的最大和
    dp[0] = nums[0];
    for(let i = 1;i < nums.length;i++){
        if(dp[i-1] > 0){//状态转移方程
            dp[i] = dp[i-1] + nums[i];
        }else{
            dp[i] = nums[i];
        }
    }
    let max = dp[0];
    for(let i = 1;i < dp.length;i++){
        if(dp[i] > max) max = dp[i];
    }
    return max;
}

/**
 * 为了保证计算子问题能够按照顺序、不重复地进行，动态规划要求已经求解的子问题不受后续阶段的影响。
 * 这个条件也被叫做「无后效性」。换言之，动态规划对状态空间的遍历构成一张有向无环图，遍历就是该有
 * 向无环图的一个拓扑序。有向无环图中的节点对应问题中的「状态」，图中的边则对应状态之间的「转移」，
 * 转移的选取就是动态规划中的「决策」。
 */