function solution(arr){
  let sumArr = [];
  let map = new Map();
  for(let i of arr){
    let strNum = i+"";
    let sumNum=0;
    for(let j=0; j<strNum.length;j++){
      sumNum += Number.parseInt(strNum.charAt(j));
    }
    console.log(sumNum);
    if(map.has(sumNum)){
      let biggerNum = map.get(sumNum) > Number.parseInt(strNum)?  map.get(sumNum):Number.parseInt(strNum);
      map.set(sumNum,biggerNum);
    }else{
      map.set(sumNum,strNum); 
    }
  }

  let keySortedArr = map.keys();
  //ascii 문자 순서로 정렬되어있어서 숫자의 크기가 제대로 나오지 않음
  let arr2 = [...keySortedArr].sort(function(a,b){
      return b-a;
  });
  return arr2[0];

}


let arr= [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));