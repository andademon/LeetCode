/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let unit,decade,hundred,kilobit,rs;
    let i = 0;
    let array = [...s];
    //千位计算
    while(array.length != 0){
        if(array[0] == 'M'){
            array.shift();
            i++;
            continue;
        }else{
            break;
        }
    }
    kilobit = i*1000;
    //百位计算
    i = 0;
    if(array[0] == 'D'){//5,6,7,8
        array.shift();
        hundred = 500;
        if(array[0] == 'C'){
            while(array[0] == 'C'){
                array.shift();
                i++;
            }
            hundred += i*100;
        }
    }else if(array[0] == 'C'){//1,2,3,4,9
        array.shift();
        i++;
        hundred = i*100;
        if(array[0] == 'M'){
            array.shift();
            hundred = 900;
        }
        else if(array[0] == 'D'){
            array.shift();
            hundred = 400;
        }
        else if(array[0] == 'C'){
            while(array[0] == 'C'){
                array.shift();
                i++;
            }
            hundred = i*100;
        }
    }
    if(hundred == undefined) hundred = 0;
    
    //十位计算
    i = 0;
    if(array[0] == 'L'){//5,6,7,8
        array.shift();
        decade = 50;
        if(array[0] == 'X'){
            while(array[0] == 'X'){
                array.shift();
                i++;
            }
            decade += i*10;
        }
    }else if(array[0] == 'X'){//1,2,3,4,9
        array.shift();
        i++;
        decade = i*10;
        if(array[0] == 'C'){
            array.shift();
            decade = 90;
        }
        else if(array[0] == 'L'){
            array.shift();
            decade = 40;
        }
        else if(array[0] == 'X'){
            while(array[0] == 'X'){
                array.shift();
                i++;
            }
            decade = i*10;
        }
    }
    if(decade == undefined) decade = 0;
    //个位计算
    i = 0;
    if(array[0] == 'V'){//5,6,7,8
        array.shift();
        unit = 5;
        if(array[0] == 'I'){
            while(array[0] == 'I'){
                array.shift();
                i++;
            }
            unit += i;
        }
    }else if(array[0] == 'I'){//1,2,3,4,9
        array.shift();
        i++;
        unit = i;
        if(array[0] == 'X'){
            array.shift();
            unit = 9;
        }
        else if(array[0] == 'V'){
            array.shift();
            unit = 4;
        }
        else if(array[0] == 'I'){
            while(array[0] == 'I'){
                array.shift();
                i++;
            }
            unit = i;
        }
    }
    if(unit == undefined) unit = 0;
    //console.log(kilobit)
    // console.log(hundred)
    // console.log(decade)
    // console.log(unit)
    rs = kilobit+hundred+decade+unit;
    return rs;
};

console.log(romanToInt("DCXXI"));