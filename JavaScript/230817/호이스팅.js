//  함수의 호이스팅(Hoisting)

//호이스팅(한국어로 번역하면 ‘끌어 올리기’)은 변수나 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상을 말합니다. 즉, 코드에서 변수나 함수를 선언하기 전에 해당 변수나 함수를 `사용할 수 있는 것처럼 보이는 현상`을 의미합니다.


var x  // var 변수를 끌어올림
// console.log(x); //undefined
// console.log(y);  // ReferenceError: Cannot access 'y' before initialization . 자바스크립트가 y의 존재는 아는데 지금은 접근안돼!라고 하는 것
// console.log(z); // ReferenceError: Cannot access 'z' before 
x = 1; // 값 할당은 여기서 이루어줌 -> 때문에 위의 콘솔 값은 undefined 출력
let y = 2;
const z = 3;

sayHi(); // "Hello, lions!" -> 함수 선언도 호이스팅 -> 무슨 값인지도 알고있다 자스는..
function sayHi() {
    console.log("Hello, lions!");
}

// 비교적 최근에 등장한 let, const, class를 이용한 선언문은 일시적 사각지대(Temporal Dead Zone)라는것을 만들어서 호이스팅이 되었지만 안된 것처럼 동작하게 합니다. 그 이유는 호이스팅은 개발자가 의도하지 않은 결과를 만들기 때문에, 코드의 가독성과 유지보수성을 해치므로, 호이스팅이 발생하지 않도록 하기 위해서입니다.

// Temporal Dead Zone(TDZ)-> 변수가 할당 전까지의 범위 , let,const는 초기화될떼까지 TDZ에 있음

// 코드상에 let, const로 선언된 변수와 상수는 TDZ(Temporal Dead Zone. 임시 접근 불가구역) 구역에 배치됩니다. 이 값들은 선언에 대한 초기화가 실행된 후에 TDZ에서 제거되어 사용 가능한 상태가 됩니다. TDZ는 말 그대로 접근이 불가능하기 때문에, 초기화 전에 TDZ에 배치된 변수에 접근하려고 하면 에러를 발생시키게 됩니다. 


// 함수를 호이스팅하지 않게 하려면 -> 함수 표현식으로 선언함
test1(); //ReferenceError: Cannot access 'test1' before initialization
const test1 = function(){
  console.log('test1');
}

// 호이스팅이 발생하지 않도록하는 코드가 좋은 코드 (코드의 실행 순서에 맞게 해야한다.)
// var 대신 let , const 사용
// 함수 표현식으로..