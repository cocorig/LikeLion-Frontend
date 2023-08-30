let hello = 'first hello';

// let hello =  'third hello'; 재선언 에러

// 중괄호 스코프를 가짐
if(true){ 
  let hello = 'second hello';
  console.log(hello); //second hello
}
console.log(hello); //first hello