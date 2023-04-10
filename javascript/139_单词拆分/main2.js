/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//想用前缀树
function recursion(s,wordDict){
    let hashMap = {};
    for(let i = 0;i < wordDict.length;i++){
        hashMap[wordDict[i]] = 1;
    }
    
}