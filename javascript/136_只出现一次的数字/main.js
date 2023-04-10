/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {};
    for(let i = 0;i < nums.length;i++){
        hashMap[nums[i]] == undefined ? hashMap[nums[i]] = 1 : hashMap[nums[i]]++;
    }
    let num;
    for(key in hashMap){
        if(hashMap[key] == 1) num = parseInt(key);
    }
    return num;
};

let nums = [2,2,1];

console.log(singleNumber(nums))