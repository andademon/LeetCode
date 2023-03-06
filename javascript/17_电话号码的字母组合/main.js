/**
 * @param {string} digits
 * @return {string[]}
 */

/**
 * 队列
 * 也可用回溯
 */

var letterCombinations = function(digits) {
    let array = [...digits];
    let temp;
    let rs = [];
    for(let i = 0;i < array.length;i++){
        switch(array[i]){
            case '2':temp = ['a','b','c'];break;
            case '3':temp = ['d','e','f'];break;
            case '4':temp = ['g','h','i'];break;
            case '5':temp = ['j','k','l'];break;
            case '6':temp = ['m','n','o'];break;
            case '7':temp = ['p','q','r','s'];break;
            case '8':temp = ['t','u','v'];break;
            case '9':temp = ['w','x','y','z'];break;
        }
        if(rs.length == 0){
            for(let k = 0;k < temp.length;k++){
                rs.push(temp[k]);
            }
            continue;
        }
        let save_len = rs.length;
        for(let j = 0;j < save_len;j++){
            let str = rs.shift();
            for(let k = 0;k < temp.length;k++){
                rs.push(str+temp[k]);
            }
        }
    }
    return rs;
};

console.log(letterCombinations("23"))