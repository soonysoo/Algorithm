function solution(a, b){
  if(a==1&&b==2){
    return 'B';
  }else if(a==2&&b==3){
    return 'B';
  }else if(a==3&&b==1){
    return 'B';
  }else if(a == b){
    return 'D';
  }else{
    return 'A';
  }
} 


let a=[2, 3, 3, 1, 3,1];
let b=[1, 1, 2, 2, 3,2];
for(let i=0 ; i < a.length ; i++)
{
  console.log(solution(a[i], b[i]));
}
