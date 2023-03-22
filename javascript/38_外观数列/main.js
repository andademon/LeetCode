/**
 * @param {number} n
 * @return {string}
 */

//递归
function recursion(n){
    let str;
    if(n > 1) str = recursion(n - 1);
    else return "1";
    let array = [...str];
    let rs = [];
    for(let i = 0;i < array.length;){
        let temp = array[i];
        let count = 0;
        while(array[i] == temp){
            count++;
            i++;
        }
        [...count.toString()].forEach(e => {
            rs.push(e);
        });
        rs.push(temp.toString()); 
    }
    return rs.join("")
}

var countAndSay = function(n) {
    return recursion(n)
};

console.log(countAndSay(4))