/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     let array_s = [...s];
//     let array_p = [...p];
//     let i = 0,j = 0,temp = '';

//     for(i = 0;i<array_p.length;i++){
//         temp = array_s[j];
//         if(array_p[i] == '.'){
//             j++;
//             continue;
//         }else if(array_p[i] == '*'){
//             let save_i = i;
//             i--;
//             // else{
//             //     while(j < array_s.length){
//             //         if(array_s[j] != array_p[i]) break;
//             //         j++;
//             //     }
//             // }
//             i = save_i;
//         }else{
//             if(array_p[i] != temp){
//                 if(array_p[i+1] == '*'){
//                     i++;
//                     continue;
//                 }
//                 return false;
//             }else j++;
//         }
//     }
//     if(j == array_s.length) return true;
//     return false;
// };

// var isMatch = function(s, p) {
//     let array_s = [...s];
//     let array_p = [...p];
//     let i = 0,j = 0,temp = '';
//     //其实只有两种情况，带通配符的字符串和不带通配符的字符串
//     while(i<array_p.length){
//         //三种情况,'.'/'*'/'char'
//         //p不变,s作为队列执行出列
//         if(array_p[i] == '.'){
//             if(i+1 < array_p.length && array_p[i+1] != '*'){
//                 array_s.shift();
//             }else{
//                 if(i + 1 == array_p.length){
//                     i++;
//                     continue;
//                 }
//                 if()
//                 while(array_s[j] != array_p[i+1]){

//                 }
//             }
//         }else if(array_p[i] == "*"){
//             while(s.length != 0){
//                 if(array_s[0] == array_p[i-1]){
//                     array_s.shift();
//                     continue;
//                 }
//                 break;
//             }
//         }else{

//         }
//         i++;
//     }
// }

//寻找数组中有无元素c，如果有，返回所有符合的下标
function search(array,c,startnum = 0){
    let rs = new Array();
    for(let i = startnum;i< array.length;i++){
        if(array[i] === c){
            rs.push(i);
        }
    }
    return rs;
}

//可以推出空串
function cantonull(array){
    if(array.length % 2 != 0) return false;
    for(let i = 0;i<array.length;){
        if(array[i] != '*' && array[i+1] == '*'){
            i = i + 2;
        }
        else return false;
    }
    return true;
}

//辅助函数，化简正则表达式(a*a*a -> aa*)消去重复项，提左公共因子
function simplify(str_p){
    p = [...str_p];
    let i = 0,j = 0;
    for(i = 0;i < p.length;){
        if(p[i] == '*'){
            let temp = p[i-1];
            if(temp == '$'){
                let temp2 = i-1;
                while(temp2 > 0){
                    if(p[temp2] == '$'){
                        temp2--;
                    }else{
                        temp = p[temp2];
                        break;
                    }
                }
            }
            // if(temp != '.'){
                j = i+1;
                // while(j < p.length){
                    if((temp == p[j]||temp == '.')  && p[j+1] == '*'){
                        while(j+1 < p.length){
                            if((temp == p[j] || temp == '.') && p[j+1] == '*'){
                                p[j] = '$';
                                p[j+1] = '$'
                                j += 2;
                                continue;
                            }else break;
                        }
                        // p[j] = '$';
                        // p[j+1] = '$';
                        // i = j+2;
                        // continue;
                    }
                    if(temp == p[j] && p[j+1] != '*'){
                        p[i] = p[j];
                        p[j] = '*';
                    }
                // }
            // }
        }
        i++;
    }
    let rs = new Array();
    for(c of p){
        if(c != '$') rs.push(c);
    }
    return rs;
}


//其实只有两种情况，带通配符的字符串和不带通配符的字符串
//s为所给串，p为正则表达式
var isMatch = function(s, p) {
    let array_s = [...s];
    let array_p = [...p];
    let i = 0,j = 0,sign = 0;
    // array_p = simplify(array_p);
    //自动机模型
    while(i < array_s.length && j < array_p.length){
        if(array_p[j] == '.'){
            i++;
            j++;
            continue;
        }else if(array_p[j] == '*'){
            if(array_p[j-1] == '.'){
                if(j == array_p.length-1) return true;
                else{
                    j++;
                    while(true){
                        while(j < array_p.length && array_p[j] == '.'){
                            j++;
                        }
                        if(j == array_p.length) return true;
                        
                        let temp = search(array_s,array_p[j],i-1);
                        if(temp.length == 0){
                            if(cantonull(array_p.slice(j,array_p.length))) return true;
                            return false;
                        }
                        
                        // while(i < array_s.length && array_s[i] != array_p[j]){
                        //     i++;
                        // }
                        // if(i == array_s.length) return false;
                        
                        else{
                            for(index of temp){
                                let s2 = array_s.slice(index,array_s.length);
                                let p2 = array_p.slice(j,array_p.length);
                                if(isMatch(s2,p2)) return true;
                            }
                            return false;
                        }
                    }
                }
            }else{
                while(array_s[i] == array_p[j-1]){
                    let s6 = array_s.slice(i-1,array_s.length);
                    let p6 = array_p.slice(j+1,array_p.length);
                    if(isMatch(s6,p6)) return true;
                    i++;
                }
                
                let s7 = array_s.slice(i-1,array_s.length);
                let p7 = array_p.slice(j+1,array_p.length);
                if(isMatch(s7,p7)) return true;
                
                // return false;

                if(i == array_s.length && j == array_p.length-1) return true;
                else{
                    if(i == array_s.length && j != array_p.length-1){
                        j++;
                        // if(array_p[j+1] == '*')
                        let s3 = array_s.slice(i-1,array_s.length);
                        let p3 = array_p.slice(j,array_p.length);
                        
                        if(isMatch(s3,p3)) return true;
                        else if(cantonull(p3)) return true;
                        else return false;
                        
                        // while(j < array_p.length){
                        //     if(array_s[i-1] == array_p[j]){
                        //         j++;
                        //     }
                        // }
                        // if(j == array_p.length) return true;
                        // return false;
                    }
                    else{
                        j++;
                    }
                }
            }
        }else{
            if(array_s[i] != array_p[j]){
                if(array_p[j+1] == '*'){
                    j += 2;
                    continue;
                }
                // else if(array_s[i-1] == array_p[j]){

                // }
                else return false;
            }
            else{
                i++;
                j++;
            }
        }
    }
    if(i == array_s.length && j ==array_p.length) return true;
    if(j == array_p.length && i != array_s.lengthb) return false;
    if(j != array_p.length){
        if(array_p[j] != '*'){
            let p4 = array_p.slice(j,array_p.length);
            if(cantonull(p4)) return true;
        }
        else{
            if(array_p[j-1] == '.' && j == array_p.length -1) return true;
            let p5 = array_p.slice(j+1,array_p.length);
            if((array_s[i-1] == array_p[j-1] || array_p[j-1] == '.')&& cantonull(p5)) return true;
            else{
                if(!cantonull(p5)){
                    if(isMatch(array_s.slice(array_s.length-1,array_s.length),p5)) return true;
                }
            }
        }
        // while(j < array_p.length){
        //     if(array_p[j] != '*'){
        //         if(array_p[j+1] == '*'){
        //             j++;
        //             continue;
        //         }
        //     }
        //     if(array_p[j] == '*'){
        //         if(array_s[i-1] == array_p[j-1])
        //     }
        // }
        return false;
    }
    // if(i == array_s.length && j == array_p.length) return true;
    return false;
}


// console.log(isMatch("abcbcba",".*cba"))
// console.log(isMatch("aaa","ab*a*c*a"))
// console.log(isMatch("a","ab*"))
// console.log(isMatch("aab","c*a*b"))
// console.log(isMatch("bbbba",".*a*a"))
// console.log(simplify(".*a*"));// -> aa*a -> aaa*
// console.log(isMatch("abbbcd","ab*bbbcd"))
// console.log(isMatch("a",".*a*"))

// console.log(simplify("a*b*a*a*c*aa*c*bc*"))
// console.log(isMatch("caa","c*b*a*c*"))
// console.log(simplify("a*.*ba.*c*..a*.a*."))
// console.log(isMatch("abbaaaabaabbcba","a*.*ba.*c*..a*.a*."))
// console.log(simplify("a*.*b.a.*c*b*a*c*"))
// "abbabaaaaaaacaa"
// "a*.*b.a.*c*b*a*c*"

// "aaabaabbcba"
// ".*c*..a*.a*."
// "abbaaaaab"
// console.log(simplify("b*a*a*.c*bb*b*.*.*"))
// console.log(isMatch("abbcacbbbbbabcbaca","a*..*"))
// "abbcacbbbbbabcbaca"
// "a*.*.b*a*"
// "a*..*"

// console.log(isMatch("bbcacbabbcbaaccabc","b*a*.c*bb*.*"))
// console.log(isMatch("aaba","ab*a*c*a"))
// console.log(simplify("b*c*b*.a.*a*.*.*b*"))

console.log(isMatch("bbbacbaacacaaaba","b*c*b*.a.*"))
"bbbacbaacacaaaba"
"b*c*b*.a.*"


"bbcacbabbcbaaccabc"
"b*a*a*.c*bb*b*.*.*"
"b*a*.c*bb*.*"

"aaba"
"ab*a*c*a"

// "bbabacccbcbbcaaab"
// "a*b*a*a*c*aa*c*bc*"

// "ab"
// ".*..c*"
// "aab"
// "c*a*b"
// "abcbcba",".*cba"

//线性规划求解
//1.画坐标法(在坐标系上标出可行域，并平移线条计算最值(最优解))
//背包问题求解 => 匈牙利算法
//双击调度问题
//卖货郎问题