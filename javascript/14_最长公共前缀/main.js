/**
 * @param {string[]} strs
 * @return {string}
 */

function findShortestString(strs){
    let min = 300,rs = 0;
    for(let i = 0;i < strs.length;i++){
        if(min > strs[i].length){
            min = strs[i].length;
            rs = i;
        }
    }
    return rs;
}
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let min = findShortestString(strs);
    let temp = strs[min];
    if(temp.length === 0) return "";
    let rs = "";
    let i = 0,j = 0;
    for(j = 0;j < temp.length;j++){
        for(i = 0;i < strs.length;i++){
            if(strs[i][j] !== temp[j]) break;
        }
        if(i != strs.length) break;
    }
    if(j === 0){
        rs = "";
    }else{
        rs = temp.slice(0,j);
    }
    return rs;
};

let strs = ["cir","car"];

console.log(longestCommonPrefix(strs));