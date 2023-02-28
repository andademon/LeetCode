/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let maxnum = Math.pow(2,31)-1;
    let minnum = -Math.pow(2,31);
    let array = [...s.trim()];
    let i = 0, sign = 0;
    
    if(array[i] == '-'){
        sign += -1;
        array.shift();
    }else if(array[i] == '+'){
        sign += 1;
        array.shift();
    }
    
    for(i = 0;i< array.length;i++){
        if(array[i] != '0') break;
        else{
            array.shift();
            i--;
            continue;
        };
    }
    console.log(array)
    if(array.length == 0 || array[0] < '0'|| array[0] > '9') return 0;
    let rs = "";
    for(i = 0;i<array.length;i++){
        if(array[i] >= '0'&&array[i] <= '9'){
            rs += array[i];
        }else break;
    }
    if(sign < 0) rs = '-' + rs;
    rs = rs * 1;
    if(rs > maxnum) return maxnum;
    if(rs < minnum) return minnum;
    return rs;
};

console.log(myAtoi("010"))