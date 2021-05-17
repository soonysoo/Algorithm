function solution(arr){
    let max =-1;
    // 행 Sum 중에서 max구하기
    for(let i=0;i<arr.length;i++){
        let temp =  arr[i].reduce((acc,cur)=>acc+cur);
        if(temp>max) max =temp;
    }
    
    //열 Sum에서 MAX 구하기
    for(let i=0;i<arr.length;i++){
        let temp = 0
        for(let j=0;j<arr[0].length;j++){
            temp +=arr[j][i];
        }
        if(temp>max) max = temp;
    }
    //대각선
    let temp1 = temp2 = temp = 0;
    for(let i=0;i<arr.length;i++){
        temp1 += arr[i][i];
        temp2 += arr[i][arr.length-i-1];
    }
    temp = temp1>temp2? temp1 : temp2;

    if(temp>max) max = temp;

    return max;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];

console.log(solution(arr));