function solution(arr){
  let answer = 1;
  let comp = arr[1];
  for(let i=1;i<arr.length;i++){
    if(comp <=arr[i+1]){
      comp = arr[i+1];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));