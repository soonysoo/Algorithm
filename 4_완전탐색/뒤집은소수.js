//소수구하는 함수
function isDecimal(num){
  if(num===1) return false;
  if(num===2) return true;

  let flag = true;
  for(i=2;i<num/2;i++){
    if(num%i===0) return false;
  }
  return flag;
}
//reverse 함수
function reverse(strNum){
  let tempStr = "";
  for(let i=strNum.length-1;i>=0;i--){
    tempStr +=strNum.charAt(i);
  }
  return Number.parseInt(tempStr);
}

function solution(arr){
  let answerArr= [];
  for(let i of arr){
    let reverseNum = reverse(i+"");
    if(isDecimal(reverseNum)){
      answerArr.push(Number.parseInt(reverseNum));
    }
  }
  return answerArr;
}

let arr = [32, 55,62, 20, 250, 370, 200, 30, 100];
 
console.log(solution(arr));
