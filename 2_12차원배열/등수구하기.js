/*
    arr.sort는 원본을 직접 변경한다.
    따라서 Array.prototype.slice를 사용해서 배열을 복사한다.
*/
function solution(arr){
    let _arr = arr.slice();
    arr.sort();
    let answer = [];
    for(let i=0;i<arr.length;i++){
       answer.push(_arr.indexOf(arr[i])+1);
    }
    return answer;
}


let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));