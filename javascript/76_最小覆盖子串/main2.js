/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//超时了，改进一下算法

//滑动窗口求解

function containAll(hashMap_window,hashMap_t){//hashMap_window是否包含hashMap_t全部元素及其数量
    for(key in hashMap_t){
        if(hashMap_window[key] >= hashMap_t[key]) continue;
        else return false;
    }
    return true;
}

var minWindow = function(s, t) {
    let hashMap_t = {};//第一个哈希表，表示t中字母及其个数
    let hashMap_window = {};//第二个哈希表，表示滑动窗口中所有字符及它们个数
    for(let i = 0;i < t.length;i++){
        isNaN(hashMap_t[t[i]]) ? hashMap_t[t[i]] = 1 : hashMap_t[t[i]]++ 
    }
    let left = 0, right = 0;
    let min = {
        len:s.length + 1,//确保一开始时min比所有解都大
        left:0,
        right:0
    }
    while(right < s.length){
        while(!containAll(hashMap_window,hashMap_t) && right < s.length){//扩张直到窗口包含可行解
            isNaN(hashMap_window[s[right]]) ? hashMap_window[s[right]] = 1 : hashMap_window[s[right]]++
            right++;
        }
        if(right == s.length){
            if(!containAll(hashMap_window,hashMap_t)) break;
        }
        while(containAll(hashMap_window,hashMap_t)){//收缩直到可行窗口最小
            hashMap_window[s[left]]--;
            left++;
        }
        //上次循环结束后不可行,left退回可行位置
        left--;
        hashMap_window[s[left]]++;
        //以下是对一种可行解的处理
        if(right == s.length){
            right--;
            if(min.len > right - left){
                min.len = right - left + 1;
                min.left = left;
                min.right = right;
            }
            break;
        }
        if(min.len > right - left){
            min.len = right - left;
            min.left = left;
            min.right = right - 1;
            hashMap_window[s[left]]--;
            left++;
        }else{
            hashMap_window[s[left]]--;
            left++;
        }
    }
    if(min.len > s.length) return "";
    else return s.slice(min.left,min.right + 1);
};

let s = "ADOBECODEBANC";
// let s = "a"

let t = "ABC";
// let t = "a"

console.log(minWindow(s,t))
// minWindow(s,t)