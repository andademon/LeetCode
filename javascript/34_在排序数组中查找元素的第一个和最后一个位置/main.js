/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//还是二分查找
var searchRange = function(nums, target) {
    let left = 0,right = nums.length - 1,mid;
    let rs = [];
    while(left <= right){
        mid = parseInt((left + right)/2);
        if(nums[mid] == target){
            left = mid;
            right = mid;
            while(left >= 0){
                if(nums[left] == target){
                    left--;
                }else break;
            }
            while(right <= nums.length){
                if(nums[right] == target){
                    right++;
                }else break;
            }
            return [left + 1,right - 1];
        }
        if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return [-1,-1];
};

// let nums = [5,7,7,8,8,10]

let nums = [1]

let target = 1

console.log(searchRange(nums,target))