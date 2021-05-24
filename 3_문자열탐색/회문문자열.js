function solution(str){
    let _str=str.toUpperCase();
    let answer = 'Yes'
    for(let i=0;i<str.length/2;i++){
        if(_str.charAt(i)!==_str.charAt(str.length-i-1)) answer='No';
    }
    return answer;
}



let str = 'gooGg'
console.log(solution(str));