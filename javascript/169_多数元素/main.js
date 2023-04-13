/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = new Map();
    let l = nums.length / 2;
    let rs;
    for(let i = 0;i < nums.length;i++){
        if(hashMap.has(nums[i])) hashMap.set(nums[i],hashMap.get(nums[i]) + 1);
        else hashMap.set(nums[i],1);
    }
    hashMap.forEach((val,key) => {
        if(val > l) rs = key;
    })
    return rs;
};

let nums = [2,2,1,1,1,2,2];

console.log(majorityElement(nums))