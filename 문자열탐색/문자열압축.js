function solution(str){
    let compareValue = str.charAt(0);
    let num = 1;
    let answer = ''+compareValue;
    
    for(let i=1;i<str.length;i++){
        if(i == str.length-1&& compareValue === str.charAt(i)){
            answer +=str.charAt(str.length-1);
        }

        if(compareValue === str.charAt(i)){
            if(i==str.length-1){
                answer +=num;
                break;
            }
            num++
        }else{
            compareValue = str.charAt(i);
            if(num==1){               
                answer +=compareValue;
            }else{
                answer +=num;
                answer +=compareValue;
                num=1;
            }
        }
    }
    return answer;
}

let str = 'KKHSSSSSSSE';

console.log(solution(str));