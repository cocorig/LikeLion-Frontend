// 함수 안에서 보통 사용된다.
// this는 객체를 가리키는 참조 변수
//**** this라는 키워드를 가지고있는 함수를 호출하는 객체를 가리킴


function a(){ console.log(this) }
a(); // Window 객체 출력 = 브라우저 자체
// Node.js 환경에서의 전역공간은 global 이란 이름을 가집니다.


let myObj = {
  val1: 100,
  func1: function () { // myObj객체 안에 함수로 실행됨
      console.log(this); //this -> myObj객체를 가리킴
  } // 사용되는곳, 호출되는 곳에 따라 다른곳을 가리킨다.
}
 
myObj.func1(); //{ val1: 100, func1: [Function: func1] }


let myObj1 = {
  val1: 100,
  func1: function () {
      console.log(this); // 전역공간을 참조함
  }
}
// 어떤 객체의 메소드가 아닌 단독 호출되는 함수의 this는 전역공간을 참조하게됩니다.
let test = myObj1.func1;
test() // 그냥 전역공간에 선언됨 -> test를 통해 실행된 함수는 전역공간을 가리킴 -> windiw 객체 반환

