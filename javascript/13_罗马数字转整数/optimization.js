/**
 * @param {string} s
 * @return {number}
 */
function getValue(s){
    switch(s){
        case 'I':return 1;
        case 'V':return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D':return 500;
        case 'M':return 1000;
    }
}

var romanToInt = function(s) {//规律为如果一个数小于它后边的数，就减这个数，否则加这个数
    let rs = 0,i = 0;
    let array = [...s];
    for(i = 1;i < array.length;i++){
        if(getValue(array[i-1]) < getValue(array[i])){
            rs -= getValue(array[i-1]);
        }else rs += getValue(array[i-1]);
    }
    rs += getValue(array[i-1]);
    return rs;
}

console.log(romanToInt("MCMXCIV"));