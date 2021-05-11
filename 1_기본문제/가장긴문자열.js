function solution(str){
    let idx = 0;
    let maxLen = 0;
    for(let i=0;i< str.length; i++){
        if(str[i].length > maxLen) idx =i;
    }
    return idx+1;
}


let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));