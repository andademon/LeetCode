/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//二分查找不需要递归
function search(array,target){//在一行上用二分查找
    let left = 0,right = array.length - 1,mid;
    while(left <= right){
        mid = parseInt((left + right) / 2);
        if(array[mid] == target) return true;
        if(array[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i = 0;i < m;i++){
        if(target > matrix[i][n - 1]) continue;
        if(target < matrix[i][0]) break;
        if(search(matrix[i],target) == true) return true;
    }
    return false;
};

let nums = [1,5,7,8,9];

console.log(search(nums,8))