/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//超时了，在main2改进一下算法

//滑动窗口求解

function getIndex(s,c,temp_array){//原字符串，要找的字符，辅助数组(防止重复字符下标相同)
    for(let i = 0;i < s.length;i++){
        if(s[i] === c && temp_array[i] === 1){
            temp_array[i] = 0;
            return i;
        }
    }
    return -1;
}

var minWindow = function(s, t) {
    let array = new Array();//array数组,存的是找到第一个包含所有字符的子串的各个字母的下标
    let temp_array = new Array(s.length).fill(1);//辅助数组，表示串s在该位置上的字符是否已被使用
    for(let i = 0;i < t.length;i++){
        let index = getIndex(s,t[i],temp_array);
        if(index != -1){
            array.push(index);
        }else{
            return "";//如果s中找不到t所属字符直接return 空串
        }
    }
    array.sort((a,b) => a-b);
    // let min = array[array.length - 1] - array[0] + 1;
    let min = {
        len:array[array.length - 1] - array[0] + 1,
        start:array[0],
        end:array[array.length - 1]
    }
    //下面开始滑动窗口
    for(let i = 0;array[i] < s.length;){
        let c = s[array[i]];
        let index = getIndex(s,c,temp_array);
        if(index != -1){
            array[0] = index;
            array.sort((a,b) => a-b);
            let newlen = array[array.length - 1] - array[0] + 1;
            if(min.len > newlen){
                min.len = newlen;
                min.start = array[0];
                min.end = array[array.length - 1];
            }
            continue;
        }else{
            return s.slice(min.start,min.end + 1);
        }
    }
};

let s = "ADOBECODEBANC";

let t = "ABC";

console.log(minWindow(s,t))