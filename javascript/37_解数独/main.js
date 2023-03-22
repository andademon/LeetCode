/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

function getTempArray(board,i,j){
    let array = new Array(9).fill(1);
    for(let m = 0;m < 9;m++){
        switch(board[i][m]){
            case '.':break;
            case '1':array[0] = 0;break;
            case '2':array[1] = 0;break;
            case '3':array[2] = 0;break;
            case '4':array[3] = 0;break;
            case '5':array[4] = 0;break;
            case '6':array[5] = 0;break;
            case '7':array[6] = 0;break;
            case '8':array[7] = 0;break;
            case '9':array[8] = 0;break;
        }
    }
    for(let m = 0;m < 9;m++){
        switch(board[m][j]){
            case '.':break;
            case '1':array[0] = 0;break;
            case '2':array[1] = 0;break;
            case '3':array[2] = 0;break;
            case '4':array[3] = 0;break;
            case '5':array[4] = 0;break;
            case '6':array[5] = 0;break;
            case '7':array[6] = 0;break;
            case '8':array[7] = 0;break;
            case '9':array[8] = 0;break;
        }
    }
    let m = Math.floor(i/3),n =Math.floor(j/3);
    for(let i = m*3;i < m*3 + 3;i++){
        for(let j = n*3;j < n*3 + 3;j++){
            switch(board[i][j]){
                case '.':break;
                case '1':array[0] = 0;break;
                case '2':array[1] = 0;break;
                case '3':array[2] = 0;break;
                case '4':array[3] = 0;break;
                case '5':array[4] = 0;break;
                case '6':array[5] = 0;break;
                case '7':array[6] = 0;break;
                case '8':array[7] = 0;break;
                case '9':array[8] = 0;break;
            }
        }
    }
    array.forEach((v,i,a) => {
        if(a[i] > 0){
            a[i] = i + 1 + "";
        }
    })
    return array.filter(x => x > 0);
}

function sudoku(board){//递归思想
    for(let i = 0;i < 9;i++){
        for(let j = 0;j < 9;j++){
            if(board[i][j] == '.'){
                let temp_array = getTempArray(board,i,j);
                if(temp_array.length == 0) return false;
                else{
                    while(temp_array.length > 0){
                        board[i][j] = temp_array.pop();
                        if(sudoku(board)) return true;
                    }
                    board[i][j] = ".";
                    return false;
                }
            }
        }
    }
    return true;
}
var solveSudoku = function(board) {
    sudoku(board);
};

solveSudoku(board);

console.log(board)

// console.log(getTempArray(board,0,5))