/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//回溯+深度优先搜索

function dfs(board,i,j,sign,word,cursor,temp_board){//深度优先搜索函数，需要排除重复解，即前一个格子需要被标记为无法使用
    //左边board[i-1][j]
    //右边board[i+1][j]
    //上边board[i][j-1]
    //下边board[i][j+1]
    //需要补上边界判断
    //现在还有一个问题，回溯可能会回到起点或者重复，需要加一个判断数组

    temp_board[i][j] = 0;//表示该位置已使用
    let stack = [];
    if(sign != "left"){//如果sign是left则右边需要被排除
        if(i != board.length - 1){
            if(board[i+1][j] == word[cursor] && temp_board[i+1][j] == 1){
                if(cursor == word.length - 1) return true;
                stack.push({"i":i+1,"j":j,"sign":"right"});
            }
        }
    }
    if(sign != "right"){//如果sign是right则左边需要被排除
        if(i != 0){
            if(board[i-1][j] == word[cursor] && temp_board[i-1][j] == 1){
                if(cursor == word.length - 1) return true;
                stack.push({"i":i-1,"j":j,"sign":"left"});
            }
        }
    }
    if(sign != "up"){//如果sign是up则下边需要被排除
        if(j != board[0].length - 1){
            if(board[i][j+1] == word[cursor] && temp_board[i][j+1] == 1){
                if(cursor == word.length - 1) return true;
                stack.push({"i":i,"j":j+1,"sign":"down"});
            }
        }
    }
    if(sign != "down"){//如果sign是down则上边需要被排除
        if(j != 0){
            if(board[i][j-1] == word[cursor]&& temp_board[i][j - 1] == 1){
                if(cursor == word.length - 1) return true;
                stack.push({"i":i,"j":j-1,"sign":"up"});
            }
        }
    }
    while(stack.length){
        let p = stack.pop();
        let rs = dfs(board,p["i"],p["j"],p["sign"],word,cursor + 1,temp_board);
        if(rs == true) return true;
    }
    temp_board[i][j] = 1;//将标记涂回未使用状态
    return false;
}

var exist = function(board, word) {
    let stack = [];
    for(let i = 0;i < board.length;i++){
        for(let j = 0;j < board[0].length;j++){
            if(board[i][j] == word[0]){
                stack.push([i,j]);
            }
        }
    }
    if(stack.length === 0) return false;
    if(word.length === 1) return true;//如果目标字符串长度为1且有第一个字符，说明匹配成功

    let rs;
    let temp_board = new Array(board.length);
    for(let i = 0;i < board.length;i++){//初始化辅助数组，表示所有位置均未使用
        temp_board[i] = new Array(board[0].length).fill(1);
    }
    while(stack.length){
        let a = stack.pop();
        rs = dfs(board,a[0],a[1],"",word,1,temp_board);
        if(rs === true) return true;//只要有一个可行解就return true,否则return false
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];

let word = "ABCCED";

console.log(exist(board,word))