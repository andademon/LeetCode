/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 解法2：
 * 排序+双指针
 * 两层循环找到前两个数，再用双指针找后两个数(小于target移动左指针，大于target移动右指针，等于则两指针都移动，每次移动指针指针所指的新的数和前面的数不能一样)，相当于减少了一层循环
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let rs = [];
    let a,b,c,d,old_a,old_b;
    for(a = 0;a < nums.length;a++){
        if(nums[a] == old_a) continue;
        old_b = '$';
        for(b = a+1;b < nums.length;b++){
            if(nums[b] == old_b) continue;
            let temp = nums[a]+nums[b];
            for(c = b+1,d = nums.length - 1;c < d;){
                if(temp+nums[c]+nums[d] == target){
                    rs.push([nums[a],nums[b],nums[c],nums[d]]);
                    let num1 = nums[d],num2 = nums[c];
                    while(nums[c] == num2 && c < d){
                        c++;
                    }
                    while(nums[d] == num1 && c < d){
                        d--;
                    }
                    continue;
                }else if(temp+nums[c]+nums[d] > target){
                    let num1 = nums[d];
                    while(nums[d] == num1 && c < d){
                        d--;
                    }
                    continue;
                }else if(temp+nums[c]+nums[d] < target){
                    let num2 = nums[c];
                    while(nums[c] == num2 && c < d){
                        c++;
                    }
                    continue;
                }
            }
            old_b = nums[b];
        }
        old_a = nums[a];
    }
    return rs;
}

console.log(fourSum([2,2,2,2,2],8))