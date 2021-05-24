/**
 * ASCII A='65'
 *       Z='90'
*/

function solution(str){
    let _str = str.toUpperCase();
    let answer ='';
    for(let i=0;i<_str.length;i++){
        let temp =_str.charCodeAt(i);
        if(!(temp>=65&&temp<=90)){
            answer = answer.concat(_str.charAt(i));
        }
    }
    return Number.parseInt(answer);
}

let str ='z0en2T0s8eSoft';

console.log(solution(str));