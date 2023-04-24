/**
 * @param {string} s
 * @return {string[]}
 */

//判断字符串是否合法
// function isValid(str){
//     let deque = [...str];
//     let stack = [];
//     while(deque.length > 0){
//         let temp = deque.shift();
//         if(temp == '(') stack.push('(');
//         if(temp == ')'){
//             if(stack.length > 0){
//                 stack.pop();
//                 continue;
//             }else return false;
//         }
//     }
//     if(deque.length == 0 && stack.length == 0) return true;
//     return false;
// }

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

//广度优先搜索
function bfs(s){
    let set = new Set();//避免结果重复
    let deque = [];//用于保存队列方便广度优先搜索
    for(let i = 0;i < s.length;i++){
        if(s[i] != '(' && s[i] != ')') continue;//如果这个数是其他字符直接跳过
        let tempStr = s.slice(0,i) + s.slice(i + 1);
        if(isValid(tempStr)) set.add(tempStr);
        else deque.push(tempStr);
    }
    if(set.size != 0) return set;

    let deque_set = new Set(...deque);
    deque = [...deque_set];
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

//广度优先算法
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

function test(){
    let i = 1;
    let rs = 1;
    while(i <= 25){
        rs *= i;
        i++;
    }
    return rs;
}

// console.log(isValid("(((()a)((a)())a"))

let s = ")()(";
console.log(removeInvalidParentheses(s));


// let set = new Set();
// set.add("())");
// set.add("(()")
// console.log(set);
// console.log([...set])
// console.log(test());

// console.log("hello".slice(0,0) + "hello".slice(1))
// console.log("hello".slice(0,4) + "hello".slice(5))