/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 解法2:快慢指针
 */
var removeDuplicates = function(nums) {
    let fast = 1,slow = 1;//快指针指向数组遍历位置，慢指针指向下一个不同元素要填入的下标位置
    if(nums.length < 2) return nums.length;
    while(fast < nums.length){
        if(nums[fast]!=nums[fast-1]){
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};