/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//在快排的基础上找元素，方法还是分治
function quickSort(array,k){//改一下，现在k就是下标了，寻找数组中应该在下标k位置的函数
    if(array.length == 1) return array[0];
    let i = 1,j = array.length - 1;
    let temp = array[0];
    //在一趟快速排序中如何确定temp应该放的位置呢
    while(i < j){//在一趟快速排序中，任务就是把所有大于哨兵的移到后面，把所有小于哨兵的移到左边
        if(array[i] < temp){
            i++;
            continue;
        }
        if(array[j] > temp){
            j--;
            continue;
        }
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        i++;
    }
    if(array[i] < temp){
        array[0] =  array[i];
        array[i] = temp;
    }else if(array[i] > temp){
        i = i - 1;
        j = j - 1;
        if(array[i] != temp){
            array[0] = array[i];
            array[i] = temp;
        }
    }
    if(i == k) return temp;//注意k是下标
    else if(k > i){//k == 5, i == 3, 在右区间
        return quickSort(array.slice(j + 1),k - i - 1);
    }else if(k < i){//在左区间
        return quickSort(array.slice(0,i),k);
    }
    // let l = quickSort(array.slice(0,i));
    // let r = quickSort(array.slice(j + 1));
    // return l.concat(temp,r);
}
var findKthLargest = function(nums, k) {
    return quickSort(nums,k)
};

// let array = [1,3,5,2,4,5,7];
// let array = [3,2,3,1,2,4,5,5,6];
// [1,2,2,3,3,4,5,5,6]
// let array = [7,6,5,4,3,2,1];
//[1,2,3,4,5,6,7]

// let array = [2,1]
let array = [3,2,1,5,6,4];
//[2,2,2,4]
// let k = 2;
// let array = [3,2,3,1,2,4,5,5,6];
// let array = [7,6,5,4,3,2,1];
// let array = [5,2,4,1,3,6,0];
let k = 2;
console.log(quickSort(array,array.length - k))