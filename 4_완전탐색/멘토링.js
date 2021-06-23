function solution(arr){
    let answer = 0;
    const studentNum = arr[0].length;
    const scoreArr = arr.length;
    for(let i=0 ; i < studentNum ; i++){
        let index = -1;
        for(let j=0; j < scoreArr ; j++){
            if(arr[j].indexOf(i+1) > index){
                index = arr[j].indexOf(i+1);
            }
        }
        answer += studentNum - index - 1;
    }
    return answer;
}



let arr= [[3,4,1,2],[4,3,2,1],[3,1,4,2]];

console.log(solution(arr));