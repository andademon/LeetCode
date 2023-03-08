/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//朴素匹配算法
var strStr = function(haystack, needle) {
    let i,j;
    for(i = 0;i < haystack.length;i++){
        if(haystack[i] == needle[0]){
            let save_i = i;
            for(j = 0;j < needle.length;j++){
                if(haystack[save_i++] == needle[j]) continue;
                else break;
            }
            if(j == needle.length) return i;
        }
    }
    return -1;
};

function fun(haystack,needle){
    let i = 0, j = 0;
    while(i < haystack.length && j < needle.length){
        if(haystack[i] == needle[j]){
            i++;
            j++;
        }else{
            i = i - j + 1;
            j = 0;
        }
    }
    if(j == needle.length) return i - j + 1;
    return -1;
}