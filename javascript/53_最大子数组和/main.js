/**
 * @param {number[]} nums
 * @return {number}
 */

//通过了，虽然好像有点不完善
//要学学分治算法
var maxSubArray = function(nums) {//发现了一个性质，子数组左右两个数必定为正数，所以我准备从两端逼近；
    let left = -1,right = nums.length - 1;
    let sum = 0;
    let array = [];
    for(let i = 0;i < nums.length;i++){//找到左边界
        if(nums[i] > 0){
            left = i;
            break;
        }
    }
    if(left == -1){//处理一下特殊情况，就是所有的数全部小于0
        let max = nums[0];
        for(let i = 1;i < nums.length;i++){
            if(nums[i] > max) max = nums[i];
        }
        return max;
    }
    for(let i = nums.length - 1;i > -1;i--){//找到右边界
        if(nums[i] > 0){
            right = i;
            break;
        }
    }
    for(let i = left;i <= right;i++){//从左边界开始，遍历到右边界
        if(nums[i] > 0){
            sum += nums[i];
            continue;
        }else{//只有当nums[i] < 0 时才把sum push到结果里
            array.push({"sum":sum,"left":left,"right":i-1})
            if(sum + nums[i] > 0){
                sum += nums[i];
                continue;
            }else{
                sum = 0;
                while(sum[i] < 0){
                    i++;
                }
                left = i;
            }
        }
    }
    array.push({"sum":sum,"left":left,"right":right})
    sum = 0;
    for(let i = 0;i < array.length;i++){
        let obj = array[i];
        if(obj.sum > sum) sum = obj.sum;
    }
    return sum;
};

// let nums = [-2,1,-3,4,-1,2,1,-5,4];

let nums = [5,4,-1,7,8];

console.log(maxSubArray(nums))