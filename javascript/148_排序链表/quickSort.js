//快速排序，空间复杂度为O(n)，不符合O(1)的要求
function quickSort(array){
    if(array.length <= 1) return array;
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
    for(let i = 0;i < array.length;i++){
        if(i == pivotIndex) continue;
        if(array[i] < pivot) left.push(array[i]);
        else right.push(array[i]);
    }
    return quickSort(left).concat([pivot],quickSort(right))
}


let array = [10,9,8,4,2,3,5,7];

console.log(quickSort(array))