const hello  = 'first hello'
// hello = 'second hello'
// console.log(hello); // TypeError: Assignment to constant variable. 재정의 금지 에러



// 중괄호 스코프 , 밖의 const hello 와 다른것
if(true){
  const hello = 'second hello';
  console.log(hello); // second hello
}
console.log(hello); //first hello