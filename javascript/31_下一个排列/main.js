/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    [1,2,3,4]
    [1,2,4,3]
    [1,3,2,4]
    [1,3,4,2]
    [1,4,2,3]
    [1,4,3,2]
    [2,1,3,4]
*/
//从后往前找到第一个正常排序
//如果找不到说明整个数组逆序，直接反转
//如果找到了就将前一个数与后面大于它的第一个数交换，然后反转后面的序列为正常排序
var nextPermutation = function(nums) {
    let i,j;
    for(i = nums.length - 1;i > 0;i--){
        if(nums[i] >= nums[i-1]) break;
    }
    if(i == 0){
        nums.reverse();
    }else{
        let temp = nums[i-1];
        j = nums.length - 1;
        while(nums[j] <= temp){
            j--;
        }
        nums[i-1] = nums[j];
        nums[j] = temp;
        for(i = i,j = nums.length - 1;i < j;i++,j--){
            let temp2 = nums[i];
            nums[i] = nums[j];
            nums[j] = temp2;
        }
    }
};

nextPermutation([1,2,3])