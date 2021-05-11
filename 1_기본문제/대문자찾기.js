function solution(str){
    let answer = 0;

    for(s of str){
        let num =  s.charCodeAt();
        if(num>=65 && num<=90) answer++;
    }
    return answer;
}

let str =  'KoreaTimeGood'

console.log(solution(str));