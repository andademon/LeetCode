/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let i,j,k,temp;
    let old_i,old_j;
    let min = 99999;
    
    for(i = 0;i < nums.length;i++){
        if(nums[i] == old_i) continue;
        old_j = '$';
        for(j = nums.length;j > i;j--){//要找的数距离target最近
            if(nums[j] == old_j) continue;
            temp = nums[i] + nums[j];
            if(temp >= target){
                for(k = i+1;k < j;k++){
                    if(Math.abs(temp + nums[k] - target) < Math.abs(min - target)) min = temp + nums[k];
                }
            }else if(temp < target){
                for(k = j-1;k > i;k--){
                    if(Math.abs(temp + nums[k] - target) < Math.abs(min - target)) min = temp + nums[k];
                }
            }
            old_j = nums[j];
        }
        old_i = nums[i];
    }
    return min;
};
//双指针法屡试不爽
/**
 * [-4,1,2,2]target = 0;cursor = 1;
 * [-4,-1,0,1,2]targrt = -5;cursor = 0;
 * [-2,-1,0,1,4]targrt = 5;cursor = 4;
 */

// let nums = [-4,1,2,2];
// let target = 0;

// let nums = [-4,-1,1,2,];
// let target = 1;

let nums = [0,0,0];
let target = 10000;//输出1001
// 0-10000 < 1001

console.log(threeSumClosest(nums,target))