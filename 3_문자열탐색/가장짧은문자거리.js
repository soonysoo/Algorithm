function solution(str){
  let arr= str.split(" ");
  // 입력받은  문자 인덱스 배열 만들기
  for(let i of arr[0]){
    
  }
  let answer =[];
  for(let i of arr[0]){
    console.log(i+" "+i.charCodeAt());
    answer.push(Math.abs(num-i.charCodeAt()))
  }
  return answer.join(" ");
}

let str ='teachermode e';

console.log(solution(str));