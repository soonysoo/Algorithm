function solution(str){
    let answer = str;
    answer  = answer.replace(/A/g,'#');
    return answer;
}

let str = 'BANANA';
console.log(solution(str));