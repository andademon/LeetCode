/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//滑动窗口求解

function getIndex(s,c,temp_array){
    for(let i = 0;i < s.length;i++){
        if(s[i] === c && temp_array[i] === 1){
            temp_array[i] = 0;
            return i;
        }
    }
    return -1;
}

var minWindow = function(s, t) {
    let array = new Array();
    // for(let i = 0;i < s.length;i++){
    //     for(let j = 0;j < t.length;j++){
    //         if(t[j] == s[i]){
    //             array[j] == 0;
    //             break;
    //         }
    //     }
    // }
    let stack = [...t];
    let temp_array = new Array(s.length).fill(1);
    while(stack.length){
        let c = stack.pop();
        let index = getIndex(s,c,temp_array)
        if(index != -1){
            array.push(index);
        }else{
            return "";//如果s中找不到t所属字符直接return 空串
        }
    }
};