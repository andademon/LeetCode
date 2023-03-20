/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//要求时间复杂度为Olog(n)，为二分查找
var search = function(nums, target) {
    let left = 0,right = nums.length - 1,mid;
    while(left <= right){
        mid = parseInt((left + right) / 2);
        if(nums[mid] == target) return mid;
        if(nums[left] <= nums[mid]){//左部为顺序区间
            if(nums[left] <= target && nums[mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{//右部为顺序区间
            if(nums[mid] < target && nums[right] >= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
};

// let nums = [4,5,6,7,0,1,2]

let nums = [1,3]

let target = 1;

console.log(search(nums,target))