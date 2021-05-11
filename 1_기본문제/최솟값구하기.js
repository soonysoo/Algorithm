
let input = '5 3 7 11 2 15 17';

let array = input.split(' ');
console.log(array);

//1. for문을 통한 parsing
for(let i=0; i<array.length ; i++){
  array[i] = Number.parseInt(array[i]);
}

//2. map을 통해서 stirng to int
let array_ = array.map(x => Number.parseInt(x));


let min = Math.min(...array_);

console.log('최소값 : '+min);

