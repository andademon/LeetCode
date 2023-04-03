/**
 * @param {character[][]} matrix
 * @return {number}
 */

/**
 * 前缀和+单调栈
 */

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

var maximalRectangle = function(matrix) {
    let length = matrix[0].length;
    let height = matrix.length;
    let array = new Array(height);
    for(let i = 0;i < height;i++){
        array[i] = new Array(length).fill(0);
    }
    console.log(array);//前缀和数组
    for(let j = 0;j < length;j++){
        let count = 0;
        for(let i = 0;i < height;i++){
            if(matrix[i][j] == 1){
                count++;
            }else if(matrix[i][j] == 0){
                count = 0;
            }
            array[i][j] = count;
        }
    }
    let max = 0;
    for(let i = 0;i < array.length;i++){
        let num = largestRectangleArea(array[i]);
        if(max < num){
            max = num;
        }
    }
    return max;
};

let matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];

console.log(maximalRectangle(matrix))
// console.log(largestRectangleArea([3,1,3,2,2]))