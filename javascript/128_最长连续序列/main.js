/**
 * @param {number[]} nums
 * @return {number}
 */

//哈希表查找元素的时间复杂度为O(1)
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    let hashMap = {};
    let hashMap2 = {};
    let array = [];
    for(let i = 0;i < nums.length;i++){
        if(nums[i] >= 0) hashMap[nums[i]] = 0;
        else hashMap2[Math.abs(nums[i])] = 0;
    }
    for(key in hashMap2){
        array.unshift(-parseInt(key))
    }
    for(key in hashMap){
        array.push(parseInt(key));
    }
    let max = 1;
    for(let i = 1;i < array.length;i++){
        let temp = 1;
        while(i <= array.length){
            if(array[i] == array[i - 1] + 1){
                i++;
                temp++
            }else{
                if(max < temp) max = temp;
                break;
            }
        }
    }
    return max;
};

// let nums = [100,4,200,2,3,1]

// let nums = [0,3,7,2,5,8,4,6,0,1,-1,-3,-2];

// let nums = [0, -1];

let nums = [9,1,4,7,3,-1,0,5,8,-1,6,-3,-2];

// let nums = [0,-1,-3,-2];
longestConsecutive(nums)