/**
 * 6. N 字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
*[04]
*[135]
*[26]
*/

var convert = function(s, numRows) {
    let rs = new Array(numRows);
    let i = 0, j = 0;
    for(j = 0;j<rs.length;j++){
        rs[j] = new Array();
    }
    while(i<s.length){
        for(j = 0;j<numRows;j++){
            rs[j].push(s[i++]);
        }
        for(j = numRows-2;j>0;j--){
            rs[j].push(s[i++]);
        }
    }
    let str = "";
    for(i = 0;i<numRows;i++){
        for(c of rs[i]){
            if(c!=undefined) str += c;
        }
    }
    return str;
};

// console.log(convert("PAYPALISHIRING",3))