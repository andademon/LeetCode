// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxCoins = function(nums) {
//     let rs = 0;
//     for(let i = 0,len = nums.length;i < len - 3;i++){
//         let min = Math.min(...nums);
//         let index = nums.indexOf(min);;
//         let pre = nums[index - 1] ?? 1;
//         let next = nums[index + 1] ?? 1
//         rs += (min * pre * next);
//         nums.splice(index,1)
//     }
//     console.log(nums)
//     while(nums.length){
//         if(nums.length === 3){
//             rs += (nums[0] * nums[1] * nums[2]);
//             nums.splice(1,1);
//         }
//         if(nums.length === 2){
//             rs += (nums[0] * nums[1]);
//             if(nums[0] >= nums[1]) nums.pop();
//             else nums.shift();
//         }
//         if(nums.length === 1){
//             rs += nums[0];
//             nums.pop();
//         }
//     }
//     return rs;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let rs = 0;
    let dp = new Array(nums.length);
    for(let i = 0;i < dp.length;i++){
        dp[i] = new Array();
    }
    for(let i = 0;i < nums.length;i++){
        for(let j = 0;j < nums.length;j++){
            if(i === j) dp[i][j] = nums[i];
            else dp[i][j] = 0;
        }
    }
    console.log(dp)

    // for(let i = 0;i < dp.length - 1;i++){
    //     dp[i][i + 1] = nums[i] * nums[i + 1] + Math.max(nums[i],nums[i + 1]);
    // }
    console.log(dp)

    for(let i = 0;i < nums.length;i++){
        for(let j = i + 2;j < nums.length;j++){
            for(let k = i + 1;k < j;k++){
                dp[i][j] = Math.max(dp[i][j],dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j])
            }
        }
    }
    //dp[0][2] = Math.max(dp[0][2],dp[0][1] + dp[1][2] + nums[0] * nums[1] * nums[2])
    //dp[0][2] = 0,6 + 10 + 15 = 31
    console.log(dp)
    return rs;
}; 

let nums = [3,1,5,8]
/**
 * dp[4][4]
 * dp = [
 *  [3,6,31,35]
 *  [0,1,10,0]
 *  [0,0,5,48]
 *  [0,0,0,8]
 * ]
 * dp[0][1] = 6
 * dp[1][2] = 10 
 * dp[2][3] = 48
 * dp[0][2] = dp[0][1] + dp[1][2] + 15 = 31//这里少算了
 * dp[0][3] = dp[0][1] + dp[1][3] + 24 = 6 + 5 + 24 = 11 + 24 = 35
 * dp[0][3] = dp[0][2] + dp[2][3] + 120 = 31 + 120 + 48 = 120 + 79 = 199//这里肯定有重复计算
 */

console.log(maxCoins(nums))

//[3,1,5]
//[3,5]
//[5]
//[]
//15 + 15 + 5

/**
 * 暴力枚举太耗时了
 * 每次只戳最小的解法错误
 * 动态规划
 * dp[i][j] 表示nums[i] 到 nums[j] 区间 戳气球能获得的最大值
 * i - k - j
 * dp[i][j] = dp[i][k] + dp[k][j] + nums[i] * nums[j] * nums[k]
 * [i][k]全戳完了
 * [k][j]也全戳完了
 */

684
102144
1596
76