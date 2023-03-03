/**
 * @param {number} num
 * @return {string}
 */

function switchFun(num,sign){
    let rs;
    if(sign == 'kilobit'){
        rs = ''.padStart(num,'M');
    }else if(sign == 'hundred'){
        if(num == '5'){
            rs = 'D'
        }else if(num < 5){
            if(num == 4){
                rs ='CD'
            }else{
                rs = ''.padStart(num,'C');
            }
        }else{
            if(num == 9){
                rs = 'CM'
            }else{
                rs = 'D'.padEnd(num-4,'C');
            }
        }
    }else if(sign == 'decade'){
        if(num == '5'){
            rs = 'L'
        }else if(num < 5){
            if(num == 4){
                rs ='XL'
            }else{
                rs = ''.padStart(num,'X');
            }
        }else{
            if(num == 9){
                rs = 'XC'
            }else{
                rs = 'L'.padEnd(num-4,'X');
            }
        }
    }else if(sign == 'unit'){
        if(num == 5){
            rs = 'V'
        }else if(num < 5){
            if(num == 4){
                rs = 'IV'
            }else{
                rs = ''.padStart(num,'I');
            }
        }else{
            if(num == 9){
                rs = 'IX'
            }else{
                rs = 'V'.padEnd(num-4,'I');
            }
        }
    }
    return rs;
}
var intToRoman = function(num) {
    let unit = num % 10;
    let decade = (num % 100 - unit)/10;
    let hundred = (num % 1000 - 10 * decade - unit)/100;
    let kilobit = parseInt(num / 1000);
    let rs = "";

    if(kilobit != 0){
        rs += switchFun(kilobit,'kilobit');
    }
    if(hundred != 0){
        rs += switchFun(hundred,'hundred');
    }
    if(decade != 0){
        rs += switchFun(decade,'decade');
    }
    if(unit != 0){
        rs += switchFun(unit,'unit')
    }
    return rs;
};

console.log(intToRoman(1994));