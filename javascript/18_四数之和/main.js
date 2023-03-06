/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 暴力求解：四重循环
 */
var fourSum = function(nums, target) {
    nums.sort();
    let a,b,c,d,old_a,old_b,old_c;
    let rs = [];
    for(a = 0;a < nums.length;a++){
        if(nums[a] == old_a) continue;
        old_b = '$';
        for(b = a+1;b < nums.length;b++){
            if(nums[b] == old_b) continue;
            old_c = '$';
            for(c = b+1;c < nums.length;c++){
                if(nums[c] == old_c) continue;
                for(d = c+1;d < nums.length;d++){
                    if(nums[a]+nums[b]+nums[c]+nums[d] == target){
                        rs.push([nums[a],nums[b],nums[c],nums[d]]);
                        break;
                    }
                }
                old_c = nums[c];
            }
            old_b = nums[b];
        }
        old_a = nums[a];
    }
    return rs;
};