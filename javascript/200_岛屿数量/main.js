/**
 * @param {character[][]} grid
 * @return {number}
 */
//想用前缀和求解了
//有一种特殊情况没有考虑到，就是中间有个洞的情况
// var numIslands = function(grid) {
//     for(let i = grid.length - 1;i > 0;i--){
//         for(let j = 0;j < grid[0].length;j++){
//             if(parseInt(grid[i][j]) > 0 && parseInt(grid[i - 1][j]) > 0){
//                 grid[i - 1][j] = (parseInt(grid[i - 1][j]) + parseInt(grid[i][j])).toString();
//                 grid[i][j] = "0";
//             }
//         }
//     }
//     console.log(grid)
//     for(let i = 0;i < grid.length;i++){
//         for(let j = grid[0].length;j > 0;j--){
//             if(parseInt(grid[i][j]) > 0 && parseInt(grid[i][j - 1]) > 0){
//                 grid[i][j - 1] = (parseInt(grid[i][j - 1]) + parseInt(grid[i][j])).toString();
//                 grid[i][j] = "0";
//             }
//         }
//     }
//     console.log(grid)
//     let rs = 0;
//     for(let i = 0;i < grid.length;i++){
//         for(let j = 0;j <grid[0].length;j++){
//             if(parseInt(grid[i][j]) > 0) rs++;
//         }
//     }
//     return rs;
// };

// let grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ];

// let grid = [["1","1","1"],["1","0","1"],["1","1","1"]];

//这种情况可以探明以i,j为起点的岛屿
function backtracing(grid,i,j,sign){//回溯试试
    grid[i][j] = "*";//表示已经遍历过
    if(grid[i] != undefined && grid[i][j + 1] != undefined && grid[i][j + 1] == "1" && sign != "right") backtracing(grid,i,j + 1,"left");
    if(grid[i + 1] != undefined && grid[i + 1][j] != undefined && grid[i + 1][j] == "1" && sign != "down") backtracing(grid,i + 1,j,"up");//什么情况不能向下
    if(grid[i] != undefined && grid[i][j - 1] != undefined && grid[i][j - 1] == "1" && sign != "left") backtracing(grid,i,j - 1,"right");
    if(grid[i - 1] != undefined && grid[i - 1][j] != undefined && grid[i - 1][j] == "1" && sign != "up") backtracing(grid,i - 1,j,"down");
    return;
    //遍历顺序为顺时针，右 -> 下 -> 左 -> 上
}

function bfs(grid){//广度优先搜索
    let i = 0,j = 0,count = 0;
    for(i = 0;i < grid.length;i++){
        for(j = 0;j < grid[0].length;j++){
            if(grid[i][j] == "1"){
                count++;
                if(j == 0) backtracing(grid,i,j,"up")//这种情况是从上面遍历下来的，不能向上;
                else backtracing(grid,i,j,"left");//这种情况是从左边过来的，不能向左
            }
        }
    }
    return count;
}
//广度优先搜索 + 回溯
var numIslands = function(grid) {
    return bfs(grid);
};

let grid = [
    ["1","1","1","1","1"],
    ["1","0","0","0","1"],
    ["1","0","1","0","1"]
    ["1","0","0","0","1"],
    ["1","1","1","1","1"],  
];


console.log(bfs(grid));