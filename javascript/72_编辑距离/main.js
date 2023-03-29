/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let l1 = word1.length, l2 = word2.length;
    let dp = new Array(l1);
    for(let i = 0;i < l1;i++){
        dp[i] = new Array(l2);
    }
    
};