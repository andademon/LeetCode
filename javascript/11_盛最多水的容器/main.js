/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = 0, s = 0, max_capacity = 0;
    // for(i = 1;i+2 < height.length;i += 2){
    //     if(height[i] > height[i-1]){
    //         height[i-1] = 0;
    //     }else height[i] = 0;
    // }
    let change = 0;
    for(i = 0,j = height.length;i < j;i++,j--){
        let temp = Math.min(height[i],height[j]);
        if(temp == 0) continue;
        for(let i2 = i+1;i2 < j;i2++){
            if(height[i2] < temp){
                height[i2] = 0;
            }
        }
    }
    // console.log(height)
    for(i = 0;i<height.length;i++){
        if(height[i] == 0){
            continue;
        }
        for(j = i + 1;j<height.length;j++){
            if(height[j] == 0){
                continue;
            }
            s = Math.min(height[i],height[j])*(j-i);
            if(s > max_capacity) max_capacity = s;
        }
    }
    return max_capacity;
};


// let height = [1,8,6,2,5,4,8,3,7];
// let height = [4,3,2,1,4]
// let height = [0,14,6,0,10,9,0,0,10,3];

console.log(maxArea(height))