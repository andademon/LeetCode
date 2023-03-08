/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//双指针，也可用快慢指针
var removeElement = function(nums, val) {
    if(nums.length == 0) return 0;
    let start = 0,end = nums.length-1;
    while(start < end){
        if(nums[start] == val){
            nums[start] = nums[end];
            end--;
            continue;
        }
        start++;
    }
    if(nums[start] == val) return start;
    return start+1;
};

let nums = [3,2,2,3];

console.log(removeElement(nums,3))