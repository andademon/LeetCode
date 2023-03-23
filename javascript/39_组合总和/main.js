/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


//javascript中函数不能重载，构造函数也是一样

function removeRepeated(array){//二维数组去重,利用对象键的不可重复性
    let rs = [];
    let obj = {};
    array.forEach(val => {
        obj[val] = val;
    })
    for(let key in obj){
        rs.push(key.split(',').map(Number));
    }
    return rs;
}


class TreeNode{
    constructor(value){
        this.value = value;
        this.son = [];
        this.path = [];//到达此结点经过的路径
    }
    addSon(value){
        this.son.push(new TreeNode(value));
    }
    addSon(value,path){
        let node = new TreeNode(value);
        for(let i = 0;i < path.length;i++){
            node.path[i] = path[i];
        }
        this.son.push(node);
    }
}

class Tree{
    constructor(value){
        this.root = new TreeNode(value);
    }
}

function getTempArray(candidates,target){//辅助函数获取辅助数组(candidates中所有小于等于target的数)
    let temp_array = [];
    for(let i = 0;i < candidates.length;i++){
        if(candidates[i] <= target){
            temp_array.push(candidates[i]);
        }
    }
    return temp_array;
}

//回溯函数
function backtracking(candidates,root,result){
    if(root.value < 0) return;
    let node = root;
    let target = node.value;
    let temp_array = getTempArray(candidates,target);
    for(let i = 0;i < temp_array.length;i++){
        let value = target - candidates[i];
        let array = new Array(node.path.length + 1);
        for(let j = 0;j < node.path.length + 1;j++){
            if(j == node.path.length){
                array[j] = candidates[i];
            }else{
                array[j] = node.path[j];
            }
        }
        array.sort((a,b) => a-b);
        node.addSon(value,array);
    }

    node.son.forEach(node => {
        backtracking(candidates,node,result);
    })

    if(node.value == 0){
        result.push(node.path);
    }
}

var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);//先给原数组排序
    let tree = new Tree(target);
    let node = tree.root;
    let result = new Array();
    backtracking(candidates,node,result);
    return removeRepeated(result);
};

let candidates = [2,3,5]

let target = 8;

console.log(combinationSum(candidates,target))