/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if(isValid(s)) return [s];//如果s本身就合法，就直接返回s，否则说明至少也要删除一个元素，则调用BFS算法
    let set = bfs(s);
    let rs = [...set];
    return rs;
};


//双指针判断括号字符串是否合法，没有额外空间开销
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
    let map = {};
    let deque = [s];
    let rs = new Set();
    while(deque.length){
        let temp = deque.shift();
        if(map[temp] === 1) continue;
        else map[temp] = 1;
        let [set,sign] = getSet(temp);
        if(sign){
            set.forEach(e => {
                rs.add(e);
            })
            break;
        }else{
            set.forEach(e => {
                deque.push(e);
            })
        }
    }
    while(deque.length){
        let temp = deque.shift();
        let [set,sign] = getSet(temp);
        if(sign) set.forEach(e => {rs.add(e)});
    }
    return rs;
}

function getSet(s){
    let validSet = new Set();
    let invalidSet = new Set();
    for(let i = 0;i < s.length;i++){
        if(s[i] != '(' && s[i] != ')') continue;//如果这个数是其他字符直接跳过
        let temp = s.slice(0,i) + s.slice(i + 1);
        if(isValid(temp)) validSet.add(temp);
        else invalidSet.add(temp);
    }
    if(validSet.size > 0) return [validSet,true];
    else return [invalidSet,false];
}

function filterLength(set){
    let array = [...set];
    let max = 0;
    for(let i = 0;i < array.length;i++){
        if(array[i].length > max) max = array[i].length;
    }
    if(array.length > 0) array = array.filter(s => s.length == max)
    let rs = new Set();
    array.forEach(e => {
        rs.add(e);
    })
    return rs;
}

// let s = ")()(f";
// let s = ")(v)((m(())()(";
// let s = "(())()()))()()";
// let s = "())v)(()(((((())";
let s = "())v)(()(((((())";
console.log(removeInvalidParentheses(s));


// let set = new Set();
// set.add("())");
// set.add("(()")
// console.log(set);
// console.log([...set])
// console.log(test());

// console.log("hello".slice(0,0) + "hello".slice(1))
// console.log("hello".slice(0,4) + "hello".slice(5))

//通过，但是低分