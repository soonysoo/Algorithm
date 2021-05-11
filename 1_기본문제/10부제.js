function solution(num, arr){
    //1. for문 이용해서 문제풀기
    let answer = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]%10===num) answer++;
    }

    return answer;
}

let num = 3;
let carArr = [25,23,11,47,53,17,33];

console.log(solution(num,carArr));