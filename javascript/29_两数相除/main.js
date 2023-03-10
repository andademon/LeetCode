/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/**
 * 加法实现，测试时报超时
 */

// function divide2(a, b) {
//     let result = 0;
//     let sign = (a > 0) ^ (b > 0) ? -1 : 1; // 计算结果的符号
//     a = Math.abs(a); // 将被除数转为正数
//     b = Math.abs(b); // 将除数转为正数
//     while (a >= b) { // 当被除数大于等于除数时
//       let temp = b; // 记录当前的除数
//       let count = 1; // 记录当前的商
//       while ((temp << 1) <= a) { // 当左移后的除数仍然小于等于被除数时
//         temp <<= 1; // 将除数左移一位，相当于乘以2
//         count <<= 1; // 将商左移一位，相当于乘以2
//       }
//       a -= temp; // 更新被除数为减去当前的最大整倍数后的值
//       result += count; // 更新结果为加上当前的最大整倍数后的值
//     }
//     return sign * result; // 返回带符号的结果
//   }

var divide = function(dividend, divisor) {
    if(dividend == 0) return 0;
    let flag = 1;
    if(divisor < 0 && dividend > 0 || divisor > 0 && dividend < 0){
        flag = -1;
    }
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    let rs = 0;
    let save_divisor = divisor;
    if(divisor == dividend){
        if(flag == 1) return 1;
        if(flag == -1) return -1;
    }
    while(divisor < dividend){
        divisor += save_divisor;
        rs++;
    }
    if(divisor == dividend){
        rs++;
    }
    if(rs == 0) return 0;
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

console.log(divide(2147483647,1))

console.log(2147483647/3)