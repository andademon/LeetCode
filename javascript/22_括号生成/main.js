/**
 * @param {number} n
 * @return {string[]}
 */

function recursion(stack,n){
    if(n > 1){
        recursion(stack,n-1);
    }
    if(n === 1){
        stack.push("()");
        return;
    }
    let len = stack.length;
    for(let i = 0;i < len;i++){
        let temp_str = "";
        let str = stack.shift();
        for(let i = 0;i < str.length;i++){
            temp_str += str[i];
            let save_temp_str = temp_str;
            if(str[i] == '('){
                temp_str += "()";
                temp_str += str.slice(i+1);
                if(stack.includes(temp_str)){
                    temp_str = save_temp_str;
                    continue;
                }
                stack.push(temp_str);
                temp_str = save_temp_str;
                continue;
            }
            if(str[i] == ')'){
                temp_str += "()";
                temp_str +=str.slice(i+1);
                if(stack.includes(temp_str)){
                    temp_str = save_temp_str;
                    continue;
                }
                stack.push(temp_str);
                temp_str = save_temp_str;
                continue;
            }
        }
    }
}

var generateParenthesis = function(n) {
    let stack = [];
    recursion(stack,n);
    return stack;
};

console.log(generateParenthesis(4));

/**
 * n = 1, rs = ["()"] 1
 * n = 2, rs = ["()()","(())"] 1 + 1 = 2
 * n = 3, rs = ["()()()","(())()","()(()),"(()())","((()))"] 1 + 3 + 1 = 5 
 * n = 4, rs = ["()()()()","(())()()","()(())()","()()(())","(()())()","()(()())","(()()())","((()))()"."()((())),"((())())","(()(()))","(((())))"] 1 + 6 + 4 + 1 = 12
 */