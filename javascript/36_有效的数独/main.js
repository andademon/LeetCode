/**
 * @param {character[][]} board
 * @return {boolean}
 */
//forEach不能乱用，首先只有长度没有元素的数组使用forEach什么都不会做，然后forEach不能终止迭代
var isValidSudoku = function(board) {
    let temp1 = new Array(10);
    let temp2 = new Array(10);
    let temp3 = new Array(10);
    for(let i = 0;i < 9;i++){
        for(let i = 0;i < 10;i++){
            temp1[i] = 0;
        }
        for(let j = 0;j < 9;j++){
            switch(board[i][j]){
                case '.':break;
                case '0':temp1[0]++;break;
                case '1':temp1[1]++;break;
                case '2':temp1[2]++;break;
                case '3':temp1[3]++;break;
                case '4':temp1[4]++;break;
                case '5':temp1[5]++;break;
                case '6':temp1[6]++;break;
                case '7':temp1[7]++;break;
                case '8':temp1[8]++;break;
                case '9':temp1[9]++;break;
            }
        }
        for(let i = 0;i < 10;i++){
            if(temp1[i] > 1) return false;
        }
    }
    for(let j = 0;j < 9;j++){
        for(let i = 0;i < 10;i++){
            temp2[i] = 0;
        }
        for(let i = 0;i < 9;i++){
            switch(board[i][j]){
                case '.':break;
                case '0':temp2[0]++;break;
                case '1':temp2[1]++;break;
                case '2':temp2[2]++;break;
                case '3':temp2[3]++;break;
                case '4':temp2[4]++;break;
                case '5':temp2[5]++;break;
                case '6':temp2[6]++;break;
                case '7':temp2[7]++;break;
                case '8':temp2[8]++;break;
                case '9':temp2[9]++;break;
            }
        }
        for(let i = 0;i < 10;i++){
            if(temp2[i] > 1) return false;
        }
    }
    let i = 0,j = 0,m = 0,n = 0;
    for(m = 0;m < 3;m++){
        for(n = 0;n < 3;n++){
            for(let i = 0;i < 10;i++){
                temp3[i] = 0;
            }
            for(i = m*3;i < m*3+3;i++){
                for(j = n*3;j < n*3+3;j++){
                    switch(board[i][j]){
                        case '.':break;
                        case '0':temp3[0]++;break;
                        case '1':temp3[1]++;break;
                        case '2':temp3[2]++;break;
                        case '3':temp3[3]++;break;
                        case '4':temp3[4]++;break;
                        case '5':temp3[5]++;break;
                        case '6':temp3[6]++;break;
                        case '7':temp3[7]++;break;
                        case '8':temp3[8]++;break;
                        case '9':temp3[9]++;break;
                    }
                }
            }
            // temp3.forEach(e => {//forEach函数没有停止迭代方式，不能中断return
            //     if(e > 1) return false;
            // })
            for(let i = 0;i < 10;i++){
                if(temp3[i] > 1) return false;
            }
        }
    }
    return true;
};

// let board = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ];

let board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];


console.log(isValidSudoku(board))
