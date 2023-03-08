/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let set = new Set(nums);
    // nums = [...set]//== nums = new Array(...set)
    // return nums;
    let count = 0;
    for(let i = 0;i < nums.length;){
        let num = nums[i];
        let j = i+1;
        while(nums[j] == num){
            nums[j] = 50000;
            count++;
            j++;
        }
        i = j;
    }
    nums.sort((a,b) => a-b);
    return nums.length - count;
};

/**
 * [$,0,$,1]
 */

let nums = [1,1,2,3]

console.log(removeDuplicates(nums))