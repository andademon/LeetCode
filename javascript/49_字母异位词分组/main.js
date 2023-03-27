/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function fun(str1,str2){//判断str2是否是str1的异位词
    if(str1.length != str2.length) return false;
    let stack2 = [...str2];
    let array = new Array(str1.length).fill(1);
    while(stack2.length){
        let c = stack2.pop();
        for(let i = 0;i < str1.length;i++){
            if(c === str1[i] && array[i] != 0){
                array[i] = 0;
                break;
            }
        }
    }
    for(let i = 0;i < array.length;i++){
        if(array[i] != 0) return false;
    }
    return true;
}

function next(array){//辅助函数，根据辅助数组返回下一个未用的数组元素，如果元素全部用完就返回-1
    for(let i = 0;i < array.length;i++){
        if(array[i] != 0) return i;
    }
    return -1;
} 

var groupAnagrams = function(strs) {
    let array = new Array(strs.length).fill(1);//辅助数组，表示原数组中元素是否使用
    let i;
    let rs = [];
    while((i = next(array)) != -1){
        let temp_array = [];
        let temp_str = strs[i];
        temp_array.push(temp_str);
        // let stack = [...strs[i]];
        array[i] = 0;//在辅助数组中标明该元素已使用
        for(i = i + 1;i < strs.length;i++){
            if(fun(temp_str,strs[i])){
                array[i] = 0;
                temp_array.push(strs[i]);
            }
        }
        rs.push(temp_array);
    }
    return rs;
};

// let strs = ["a"];
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];


// console.log(fun("eat","tea"));
console.log(groupAnagrams(strs))