var hello = 'hello';


function sayHello(){ // 함수 안에서만 작동 , function scops
  var hello = 'hello hello';
  console.log(hello); 
}

//변수 설정을 동일하게 해도 에러가 안남
if(true){
  var hello = 'if hello';
}

sayHello()//hello hello
console.log(hello); // hello -> if hello


// 이러한 문제는 지양해야한다, 때문에 let , const  등장
var bye = 'bye';
var bye =  'bye bye';
console.log(bye); // bye bye