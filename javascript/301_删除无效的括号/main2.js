//判断字符串是否合法,双指针法无额外空间开销
const isValid = (str) => {
    let count = 0;

    for (const c of str) {
        if (c === '(') {
            count++;
        } else if (c === ')') {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}

//广度优先搜索 + 回溯
function bfs(s){
    let set = new Set();//避免结果重复
    let deque = new Set();//用于保存队列方便广度优先搜索
    for(let i = 0;i < s.length;i++){
        if(s[i] != '(' && s[i] != ')') continue;//如果这个数是其他字符直接跳过
        let tempStr = s.slice(0,i) + s.slice(i + 1);
        if(isValid(tempStr)) set.add(tempStr);
        else deque.add(tempStr);
    }
    if(set.size != 0) return set;

    deque = [...deque];
    let tempSet = new Set();
    while(deque.length != 0){
        tempSet = bfs(deque.shift());
        if(tempSet.size != 0){
            tempSet.forEach(s => {
                set.add(s);
            })
        }
    }
    return set;
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if(isValid(s)) return [s];//如果s本身就合法，就直接返回s，否则说明至少也要删除一个元素，则调用BFS算法
    let set = bfs(s);
    let rs = [...set];
    let max = 0;
    for(let i = 0;i < rs.length;i++){
        if(rs[i].length > max) max = rs[i].length;
    }
    if(rs.length > 0) rs = rs.filter(s => s.length == max)
    return rs;
};