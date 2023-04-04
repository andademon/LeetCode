/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/**
 * 哈希表?
 */

function contain(map1,map2){
    for(key in map1){
        if(map1[key] == map2[key]) continue;
        else return false;
    }
    return true;
}

var findSubstring = function(s, words) {
    let map1 = {};//map1维护的是words数组中所有子串
    let map2 = {};//map2维护的是当前子串包含的words数组中元素及个数
    let len = words[0].length;
    let deque = [];//双端队列充当滑动窗口
    let rs = [];
    for(let i = 0;i < words.length;i++){
        map1[words[i]] == undefined ? map1[words[i]] = 1 : map1[words[i]]++;
    }
    let i = 0;
    while(i <= s.length){
        if(deque.length < len){
            deque.push(s[i]);
            i++;
            continue;
        }else{
            let key = deque.join("");
            if(map1[key] != undefined && (map2[key] == undefined || map2[key] < map1[key])){ 
                map2[key] == undefined ? map2[key] = 1 : map2[key]++;
                if(contain(map1,map2)){
                    rs.push(i - len * words.length);
                    // let start = i - len * words.length;
                    // let first_key = "";
                    // for(let j = start;j < start + len;j++){
                    //     first_key += s[j];
                    // }
                    // map2[first_key]--;
                    map2 = {};
                    i = i - len * words.length + 1;
                }
                deque = [];
                continue;
            }else{
                if(map2[key] != undefined){
                    // map2 = {};
                    // map2[key] = 1;
                    // deque = [];
                    let count = 0;
                    for(key in map2){
                        count += map2[key];
                    }
                    map2 = {}
                    deque = [];
                    i -= len * (count + 1) - 1;
                    // console.log(i)
                    continue;
                }
                let count = 0;
                for(key in map2){
                    count += map2[key];
                }
                i -= len * (count + 1) - 1;
                map2 = {};
                deque = [];
            }
        }
    }
    return rs;
};

// let s = "barfoothefoobarman";

// let s = "barfoofoobarthefoobarman";

// let s = "wordgoodgoodgoodbestword";

// let words = ["foo","bar"];

// let words = ["bar","foo","the"];

// let words = ["word","good","best","good"];

// let s = "ababaab";

let s = "abaababbaba";

let words = ["ab","ab","ba","ba"];

console.log(findSubstring(s,words))