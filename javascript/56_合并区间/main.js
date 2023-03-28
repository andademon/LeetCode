/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let rs = [];
    intervals.sort((e1,e2) => e1[0] - e2[0]);
    rs.push(intervals.shift());
    while(intervals.length > 0){
        let interval1 = rs.pop();
        let interval2 = intervals.shift();
        if(interval1[1] >= interval2[0]){
            rs.push([interval1[0],Math.max(interval1[1],interval2[1])]);
        }else{
            rs.push(interval1);
            rs.push(interval2);
        }
    }
    return rs;
};

// let intervals = [[1,3],[2,6],[8,10],[15,18]];

let intervals = [[1,4],[0,4]];

intervals.sort((e1,e2) => e1[0] - e2[0]);

// console.log(merge(intervals))

console.log(intervals)