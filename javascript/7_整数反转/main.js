/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    if(x == 0) return 0;
    let sign = 0;
    let str = x.toString();
    let array = new Array();
    if(x>0){
        sign = 1;
        array = [...str];
    }else{
        sign = -1;
        array = [...str.substring(1,str.length)];
    }
    array.reverse();
    
    let rs = "";
    let i = 0;
    
    // rs.trimStart('0');
    for(;i<array.length;i++){
        if(array[i] != 0) break;
    }
    if(i == array.length) i = 0;

    for(;i<array.length;i++){
        rs += array[i];
    }
    
    if(sign == -1){
        rs = "-" + rs;
    }

    let maxnum = Math.pow(2,31) - 1;
    let minnum = -Math.pow(2,31);
    if(rs > maxnum || rs < minnum) return 0;
    return rs;
};

console.log(reverse(563847412));