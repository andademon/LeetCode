/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp,temp2;
    let stack1 = [...s];
    let stack2 = [];
    while(stack1.length !== 0){
        temp = stack1.pop();
        if(temp === '{'){
            if(stack2.pop() === '}') continue;
            else return false;
        }else if(temp === '['){
            if(stack2.pop() === ']') continue;
            else return false;
        }else if(temp === '('){
            if(stack2.pop() === ')') continue;
            else return false;
        }else{
            stack2.push(temp);
        }
    }
    if(stack1.length === 0 && stack2.length === 0) return true;
    else return false;
};

console.log(isValid("()[]{}"))