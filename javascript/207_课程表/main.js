/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//拓扑排序需要计算入度与出度
//有点有向无环图的感觉(拓扑排序)
var canFinish = function(numCourses, prerequisites) {
    let arr = new Array(numCourses);
    for(let i = 0;i < numCourses;i++){
        arr[i] = new Array(numCourses).fill(0);
    }
    let stack = new Array(numCourses).fill(0);//用于保存入度
    let deque = [];
    for(let i = 0;i < prerequisites.length;i++){
        stack[prerequisites[i][0]]++;//pre[i][1]是pre[i][0]的先修结点，则pre[0]入度增加
        arr[prerequisites[i][1]][prerequisites[i][0]] = 1;//表示pre[i][1] 到 pre[i][0]的有向边存在
    }
    for(let i = 0;i < numCourses;i++){
        if(stack[i] == 0) deque.push(i);
    }
    let count = 0;
    while(deque.length){//当入度为0的队列不为空
        let node = deque.shift();
        count++;
        for(let i = 0;i < numCourses;i++){
            if(arr[node][i] == 1){
                stack[i]--;
                if(stack[i] == 0) deque.push(i);    
            }
        }
    }
    if(count == numCourses) return true;
    return false;
};

let prerequisites = [[1,0]];

console.log(canFinish(2,prerequisites))