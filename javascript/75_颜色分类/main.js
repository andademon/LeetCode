/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    for(let i = 0;i < nums.length && i <= right;){
        if(nums[i] === 2){
            let temp = nums[right];
            nums[right] = 2;
            nums[i] = temp;
            right--;
            continue;
        }else if(nums[i] === 0){
            let temp = nums[left];
            nums[left] = 0;
            nums[i] = temp;
            left++;
        }
        i++;
    }
};

let nums = [2,0,2,1,1,0];

sortColors(nums);