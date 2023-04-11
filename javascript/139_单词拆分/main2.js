/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//动态规划
function recursion(s,wordDict){
    let hashMap = {};
    for(let i = 0;i < wordDict.length;i++){
        hashMap[wordDict[i]] = 1;
    }
    let dp = new Array(s.length);
    for(let i = 0;i < s.length;i++){
        dp[i] = 0;
    }
    let temp = "";
    for(let i = 0;i < s.length;i++){
        temp += s[i];
        if(hashMap[temp] != undefined){//temp存在于哈希表中
            dp[i] = 1;
            temp = "";
        }else{
            for(let j = i - 1;j >= 0;j--){
                if(dp[j] == 1){
                    if(hashMap[s.slice(j + 1,i + 1)] != undefined) dp[i] = 1;
                }
            }
            if(hashMap[s.slice(0,i + 1)] != undefined) dp[i] = 1;
        }
    }
    return dp[s.length - 1];
}

// let wordDict = ["cats", "dog", "sand", "and", "cat","og"];
let wordDict = ["a","aeb","ebbbb","s","eb"];
let s = "aebbbbs";
// let s = "catsandog";
console.log(recursion(s,wordDict))