/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let array = [...s];
    let i = 0,j = 0,max_len = 0,len = 0;
    let stack = [];
    let status = new Array(s.length);//记录所有括号匹配状态
    status.forEach(value => {
        value = 0;//表示尚未匹配成功
    })
    while(array[i] == ')' && i < array.length){
        i++;
    }
    for(;i < array.length;i++){
        if(array[i] == '('){
            stack.push(i);
            // rs += '(';
        }else{
            let temp = stack.pop();
            if(temp != undefined){//匹配成功
                status[temp] = 1;
                status[i] = 1;
            }else{//匹配失败
                stack = new Array();
                continue;
            }
        }
    }
    for(i = 0;i < status.length;i++){
        if(status[i] == 1){
            j = i + 1;
            while(status[j] == 1){
                j++;
            }
            len = j - i;
            if(len > max_len){
                max_len = len;
            }
        }
    }
    return max_len;
};

// let s = ")()())";

let s = "()(()(()(())()";

let test = [];

console.log(test.pop())