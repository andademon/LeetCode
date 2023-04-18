/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0,j,length = nums.length;
    while(i < length){
        if(nums[i] == 0){
            if(j == undefined) j = i;
            i++;
            continue;
        }
        if(j == undefined){
            i++;
            continue;
        }
        nums[j] = nums[i];
        j++;
        nums[i] = 0;
        i++;
    }
};