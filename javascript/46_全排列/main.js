/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 全排列
 * [1,2,3,4,5]
 * [1,2,3,5,4]
 * [1,2,4,3,5]
 * [1,2,4,5,3]
 * [1,2,5,3,4]
 * [1,2,5,4,3]
 * [1,3,2,4,5]
 * [1,3,2,5,4]
 * [1,3,4,2,5]
 * [1,3,4,5,2]
 * [1,3,5,2,4]
 * [1,3,5,4,2]
 * 有什么规律？
 * 我的想法是递归求解
 * 三步
 * 1.确定递归函数的参数及返回值
 * 2.确定递归结束条件
 * 3.确定每一层递归的方法
 *
 * 每一层应该求出该层的所有排列组合，然后上一层的数找位置插进去就行 
 * 
 * 全排列长度为n!(n的阶乘)
 */


/**
 * 1
 * [5]
 * 
 * 1*2 = 2
 * [4,5]
 * [5,4]
 * 
 * 2*3 = 6
 * [3,4,5]
 * [4,3,5]
 * [4,5,3]
 * [3,5,4]
 * [5,3,4]
 * [5,4,3]
 * 
 * 6*4 = 24
 * [2,3,4,5]
 * [2,5,3,4]
 * [2,5,4,3]
 * [3,2,5,4]
 * 
 */

function backTracing(array,result){
    let start;
    if(array.length == 1){
        result.push(array);
        return;
    }
    else{
        start = array.shift();
        backTracing(array,result);
    }
    let len = result.length;
    for(let i = 0;i < len;i++){//这里要在遍历之前先保存原数组长度，否则数组长度一直变，循环永远也结束不了
        let element = result.shift();//[4,5],[5,4]
        //javascript数组删除、插入入通用方法为splice(),注意和slice方法进行区别,slice是切片，并不修改原数组，splice是修改(插入，删除)原数组，返回删除的切片
        for(let j = 0;j <= element.length;j++){
            let temp_array = [...element];
            temp_array.splice(j,0,start);
            result.push(temp_array);
        }
    }
}

var permute = function(nums) {
    let result = new Array();
    backTracing(nums,result)
    return result;
};

let nums = [1,2,3];

console.log(permute(nums))