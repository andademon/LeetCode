/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let str = x.toString();
    let array = [...str];
    let i = 0,j = array.length - 1;
    for(;i <= j;i++,j--){
        if(array[i] !== array[j]) break;
    }
    if(i > j) return true;
    return false;
};

console.log(isPalindrome(121))