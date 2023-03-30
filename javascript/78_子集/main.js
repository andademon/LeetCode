/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let rs = new Array();
    rs.push([nums[0]]);
    for(let i = 1;i < nums.length;i++){
        let len = rs.length;
        for(let j = 0;j < len;j++){
            let temp = new Array([...rs[j]]).flat();
            temp.push(nums[i]);
            rs.push(temp);
        }
        rs.push([nums[i]]);
    }
    rs.push([]);
    return rs;
};

let nums = [1,2,3];

console.log(subsets(nums))