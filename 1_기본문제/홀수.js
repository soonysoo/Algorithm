function solution(arr){
  let oddArr = arr.filter(x => x%2 === 1) 
  let sum = oddArr.reduce((cur,next)=> cur+next);
  console.log(sum);
  return Math.min(...oddArr);
}

let arr =  [12, 77, 38, 41, 53, 92,85];

console.log(solution(arr));