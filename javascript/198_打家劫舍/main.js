/**
 * @param {number[]} nums
 * @return {number}
 */
//像是动态规划
/**
 * 其实只有两种选择
 * [2,7,9,3,1]
 * 如果从2开始的话，下一个选择只有跳过7的9或者3。为什么不能是1呢，因为选1必选9
 * 每次做分支选择时都会出现这个问题吧
 * 好像没把情况考虑全
 * 因为从1开始时后面也会出现是选1还是选2的问题，怎么办呢
 * [2,7,9,7,5,1]//这种情况该怎么选？
 * 7 + 7 == 9 + 5
 * 但是后面还有1
 * 对于未知的情况该怎么考虑
 * 回溯选最优解吗
 */

//递归解法超出时间限制
/**
 * @param {number[]} nums
 * @param {number} pre
 */
function backtracing(nums){//前面一户一定是没偷的，所以可行解从nums[0]开始，不用考虑之前的情况
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    
    let num1 = nums[0] + backtracing(nums.slice(2));//slice返回值一定是数组，即使没有元素在切片内也是返回空数组
    let num2 = nums[1] + backtracing(nums.slice(3));
    //返回值这块还是要搞明白
    return Math.max(num1,num2);
}

var rob = function(nums) {
    return backtracing(nums);
};

let nums = [209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124];
console.log(rob(nums));