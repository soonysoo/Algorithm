function solution(str){
    let str_arr = str.split(' ');
    let index_arr = [];
    let answer = [];
    // 기준 문자의 인덱스 배열 생성
    for(let i=0 ; i<str_arr[0].length ; i++ ){
        if(str_arr[0].charAt(i)==str_arr[1]){
            index_arr.push(i);
        }
    }
    
    for(let i=0; i<str_arr[0].length;i++){
        let min = Number.MAX_SAFE_INTEGER;
        for( let j of index_arr){
            let temp =  Math.abs(j-i); 
            min = temp < min? temp:  min;  
        }
        answer.push(min);
    }
    return answer;
}


let str = 'teachermode e';

console.log(solution(str));