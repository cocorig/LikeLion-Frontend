
function sayName(){
  console.log(this.name); // 전역공간을 가리킴
}
var name = 'Hero';  // Window의 속성으로 정으돔전역공간 -> let,const 는 Window객체에 들록이되지않음
// var name = 'Hero';
// let name2 = "hero";
// const name3 = "hero";
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// 때문에 window.name === "Hero" 가 성립합니다.

// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name : 'Peter Parker',
  sayName : sayName 
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName //function sayName(){
                  //console.log(this.name);
  //}
}

sayName(); // Hero
peter.sayName();  //Peter Parker
bruce.sayName();  // Bruce Wayne

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */


// 다이나믹 스코핑 : 문법만 봤을 때 this가 어디서 쓰이는지 알수가 없을 때(실행돼야 알수있을 때) <-> 랙시컬 스코핑 : 문법을 봤을 때 this가 무엇인지 알 수 있을 때

//this는 함수가 만들어질 때가 아닌 '실행'될 때 그 값이 결정됩니다.
function sayName(){
  console.log(this.name);
}
var name = 'Hero1';

let peter1 = {
  name : 'Peter Parker1',
  sayName : sayName
};

let bruce1 = {
  name : 'Bruce Wayne1',
  sayName : peter1.sayName  // -> function sayName(){
                                //console.log(this.name);
}
peter1.sayName(); //Peter Parker1
bruce1.sayName(); //Bruce Wayne1



