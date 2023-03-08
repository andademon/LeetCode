/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//KMP模式匹配

function getNext(needle){
    let next = new Array(needle.length);
    next[0] = -1;
    next[1] = 0;
    let j = 0, i = 1;
    while(i < needle.length){
        if(needle[i] == needle[j] || j == -1){
            i++;
            j++;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}

//KMP模式匹配
function Index_KMP(haystack, needle) {
    let i = 0, j = 0;
    let next = getNext(needle);
    console.log(next)
    while(i < haystack.length && j < needle.length){
        if(j == -1){
            i++;
            j = 0;
        }
        if(haystack[i] == needle[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == needle.length) return i - needle.length + 1;
    return -1;
};

let haystack = "leetcode";
let needle = "leeto"
console.log(Index_KMP(haystack,needle))