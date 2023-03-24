/**
 * @param {number[]} height
 * @return {number}
 */


/**
 * 暴力遍历求解
 * 4,2,0,3,2,5 => 1
 * 3,1,0,2,1,4 => 1
 * 2,0,0,1,0,3 => 3
 * 1,0,0,0,0,2 => 4
 * 0,0,0,0,0,1 => 0
 *         |
 * |       |
 * |     | |
 * | |   |||
 * | |   |||
 */

function num_not_zero(height,i,j){
    let count = 0;
    for(let m = i,n = j;m <= n;m++){
        if(height[m] !== 0) count++;
    }
    return count;
}

var trap = function(height) {
    let sum = 0,i = 0,j = height.length - 1;
    while(height[i] == 0 || height[j] == 0){
        if(height[i] == 0) i++;
        if(height[j] == 0) j--;
    }
    while(num_not_zero(height,i,j) > 1){
        for(let k = i;k <= j;k++){
            if(height[k] == 0) sum++;
            else height[k]--;
        }
        while(height[i] == 0 || height[j] == 0){
            if(height[i] == 0) i++;
            if(height[j] == 0) j--;
        }
    }
    return sum;
};

// let height = [0,1,0,2,1,0,1,3,2,1,2,1];

let height = [4,2,0,3,2,5];

// console.log(num_not_zero(height))
console.log(trap(height))