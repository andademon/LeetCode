/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let dp = new Array(nums.length).fill(-99);
//     dp[0] = nums[0];
//     for(let j = 1;j < nums.length;j++){//一趟遍历求出的累乘和只能确定以nums[i]开头的子数组的最大长度，后面有可能会有不以nums[i]开头的数组
//         let multiply = nums[j - 1];
//         for(let i = j;i < nums.length;i++){
//             multiply = (multiply == 0 ? nums[i] : multiply * nums[i]);//记录当前连续累乘和
//             if(nums[i] == 0){
//                 dp[i] = Math.max(dp[i - 1],0,dp[i]);
//             }else{
//                 dp[i] = Math.max(dp[i - 1],multiply,nums[i],dp[i])
//             }
//         }
//     }
//     return dp[nums.length - 1];
// };


//太疯狂了
//改进一下，看看能不能一次遍历出结果
//成功，时间复杂度降为O(n),需要用一个额外空间存储最早负数累乘积
var maxProduct = function(nums) {
    let dp = new Array(nums.length);
    let minus = [];
    dp[0] = nums[0];
    let multiply = nums[0];
    if(nums[0] < 0){
        minus.push(nums[0]);
    }
    for(let i = 1;i < nums.length;i++){
        multiply = (multiply == 0 ? nums[i] : multiply * nums[i]);//记录当前连续累乘积
        if(multiply < 0) minus.push(multiply);
        if(nums[i] == 0){
            dp[i] = Math.max(dp[i - 1],0);
            minus = new Array();
        }else if(multiply >= 0){
            dp[i] = Math.max(dp[i - 1],multiply,nums[i])
        }else{
            if(minus.length > 1 && multiply / minus[0] > dp[i - 1] && multiply / minus[0] > nums[i]){
                dp[i] = multiply / minus[0];
            }else{
                dp[i] = Math.max(dp[i - 1],nums[i]);
            }
        }
    }
    console.log(dp)
    return dp[nums.length - 1];
};

// let nums = [-3,2,-2,-5];//很明显结果是20
// let nums = [-2,0,-1]
//需要记录一下当前连续正累乘和
//如果累乘结果为负数需要查看当前连续正数累乘和
//正累乘和为8
//8 * 3 = 24;
// let nums = [2,-5,-2,-4,3];//结果为24
//10 * 2 = 20
//20 * -4 = -80
//-80 * 3 = -240
//-240 / 负数累乘和为-10
//正数累乘和为24;

let nums = [1,0,-1,2,3,-5,-2];

/**
 * 推算一下
 * 2 * -5 = -10
 * -10 * -2 = 20
 * 20 * -4 = -80 || 20 || 80 / -10 = 8
 * -80 * 3 = -240 || -2 * -4 *3 = 24 || 240 / -10
 * 
 */
console.log(maxProduct(nums));