/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {};
  let temp = [];
  for(let i = 0;i < nums.length;i++){
    if(map[nums[i]])map[nums[i]]++;
    else{
      map[nums[i]] = 1;
      temp.push(nums[i]);
    };
  }
  return temp.sort((a,b) => map[b] - map[a]).slice(0,k);
};