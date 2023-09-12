/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let rs = [0];
  for (let i = 1; i <= n; i++) {
    rs[i] = i % 2 === 0 ? rs[i / 2] : rs[i - 1] + 1;
  }
  return rs;
};

/**
 *O(n)
 *动态规划
 *0
 *1
 *10
 *11
 *100
 *101
 *110
 *111
 *1000
 */
