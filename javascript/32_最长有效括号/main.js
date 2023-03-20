/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let temp,max_len = 0;
    let stack1 = [...s];
    let stack2 = [];
    let stack3 = [];
    while(stack1.length !== 0){
        temp = stack1.pop();
        if(temp === '('){
            if(stack2.pop() === ')'){
                stack3.push('(');
                continue;
            }
            else{

            }
        }else{
            stack2.push(temp);
        }
    }
    if(stack1.length === 0 && stack2.length === 0) return true;
    else return false;
};