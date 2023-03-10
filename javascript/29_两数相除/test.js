/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/**
 * 二进制乘法运算解决
 * 已通过测试
 */
var divide = function(dividend, divisor) {
    if(dividend == 0) return 0;
    let flag = 1;
    if(divisor < 0 && dividend > 0 || divisor > 0 && dividend < 0){
        flag = -1;
    }
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    let rs = 0;
    let save_divisor1 = divisor;
    let save_divisor;
    //在运算之前先进行2次判断
    //如果divisor与dividend相等，直接返回1
    if(divisor == dividend){
        if(flag == 1) return 1;
        if(flag == -1) return -1;
    }
    //如果divided < divisor，直接返回0
    if(dividend < divisor) return 0;

    //剩下的情况只有dividend > divisor，所以 rs >= 1;
    //这里进行的是二进制左移，相当于乘2
    rs = 1;
    while(divisor < dividend){
        save_divisor = divisor;
        divisor += divisor;
        rs = rs << 1;
    }
    if(rs < 0) rs = Math.abs(rs);
    //如果超出了,就少做一次乘二运算，然后执行加法运算
    if(divisor > dividend){
        divisor = save_divisor;
        rs = rs >> 1;
        if(rs < 0){
            rs = Math.abs(rs);
        }
        while(divisor < dividend){
            divisor += save_divisor1;
            rs++;
        }
        if(divisor > dividend){
            rs--;
        }
    }

    if(flag == 1){
        if(rs >= Math.pow(2,31) - 1){
            return Math.pow(2,31) - 1;
        }else{
            return rs;
        }
    }
    if(flag == -1){
        rs = -rs;
        if(rs <= Math.pow(-2,31)){
            return Math.pow(-2,31);
        }else{
            return rs;
        }
    }
};

console.log(divide(10,3))

// let test = 1;
// for(let i = 0; i< 30;i++){
//     test << 1;
//     console.log(test);
// }
// console.log(test <<= test)

// console.log(2147483647/3)