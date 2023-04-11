/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = new Array(word1.length + 1);//包含空串，所以长度+1
    for(let i = 0;i <= word1.length;i++){
        dp[i] = new Array(word2.length + 1);
    }
    //dp[i][j]表示word1前i个字符到word2前j个字符的编辑距离
    for(let i = 0;i < word1.length + 1;i++){
        dp[i][0] = i;
    }
    for(let j = 0;j < word2.length + 1;j++){
        dp[0][j] = j;
    }
    dp.forEach(arr => {
        console.log(arr)
    })
    for(let i = 1;i < word1.length + 1;i++){
        for(let j = 1;j < word2.length + 1;j++){
            if(word1[i - 1] == word2[j - 1]) dp[i][j] = Math.min(dp[i - 1][j - 1],dp[i - 1][j] + 1,dp[i][j - 1] + 1);
            else dp[i][j] = Math.min(dp[i - 1][j] + 1,dp[i][j - 1] + 1,dp[i - 1][j - 1] + 1);//添加、替换(删除等于另一个字符串添加)
        }
    }
    return dp[word1.length][word2.length];
};

// let word1 = "horse";
// let word2 = "ros";

let word1 = "intention";
let word2 = "execution";

console.log(minDistance(word1,word2))