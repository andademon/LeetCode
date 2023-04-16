/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    left[0] = 1;
    right[nums.length - 1] = 1;
    for(let i = 1;i < nums.length;i++){
        left[i] = left[i - 1] * nums[i - 1];
    }
    for(let j = nums.length - 2;j >= 0;j--){
        right[j] = right[j + 1] * nums[j + 1];
    }
    let rs = new Array(nums.length);
    for(let i = 0;i < nums.length;i++){
        rs[i] = left[i] * right[i];
    }
    return rs;
};