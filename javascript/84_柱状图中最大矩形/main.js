/**
 * @param {number[]} heights
 * @return {number}
 */

//看到题解有说单调栈
/**
 * 两边扩散？
 * 这题确实有点像之前的接雨水
 * 最大矩形面积什么时候回增加，什么时候会减小，这是个问题
 * 只要右边的元素比他-1大，面积一定增加
 * 如果小于他 - 1 面积也不一定减小
 * height * len
 * height * (len + 1)
 * (height - 1) * (len + 1)
 * 找规律
 * 先用暴力解法解一下试试
 */

//朴素暴力解法，对于每一个i找到高为heights[i]的矩形的最大面积
//超时，需要优化
//跑通了，但是时间复杂度过高
var largestRectangleArea = function(heights) {
    let s;
    let max = 0;
    let left,right;
    for(let i = 0;i < heights.length;i++){//找到左右边界//找到高为heights[i]位置的最大矩形的面积
        for(left = i;left >= 0;left--){
            if(heights[left] < heights[i]){
                break;
            }
        }
        for(right = i;right < heights.length;right++){
            if(heights[right] < heights[i]){
                break;
            }
        }
        s = heights[i] * (right - left - 1);
        if(max < s) max = s;
        let index = i;
        while(heights[index] == heights[i]){
            index++;
        }
        i = index - 1;
    }
    return max;
};

// let heights = [2,1,5,6,2,3];

let heights = [2,3]


console.log(largestRectangleArea(heights))