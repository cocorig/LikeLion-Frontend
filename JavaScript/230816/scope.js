// 스코프는 하나의 공간

// **스코프의 종류**

// 1. 전역 스코프 (되도록 사용하지 않도록 한다.)
// - 스크립트의 어디서든 접근이 가능하기 때문에 사용이 쉽습니다.
// - 타인과의 협업, 라이브러리 사용시 충돌의 가능성이 있습니다.


// 2. 함수 스코프 (var라는 키워드를 써도 접근이 안된다.)
// - 함수 내부에서 정의된 변수와 매개변수는 함수 외부에서 접근할 수 없습니다.
// - 함수 내부에서 정의된 변수라면 함수의 어느 부분에서도 접근 할 수 있습니다.


// 함수 스코프
const func1 = function(){
  var a = 1; // a라는 변수에 사용할 수 있눈것
	var b = 2;
  // 변수는 함수가 종료면 함스 스코프가 가비지 컬랙션으로 수거되기 때문에, 메모리상에서 자동으로 제거됩니다.자동으로 메모리를 관리합니다.
  console.log(a + b);// 3
};

var a = 20;  // 전역공간에 설정

func1();


let z = 100; // z는 전역변수 
function sum(x){ // x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; // y는 지역변수
  z = z + y;
  return x + y;
}
console.log(sum(10)); // 10은 전달인자(argument)
// console.log(x); //ReferenceError: x is not defined
// console.log(y); //ReferenceError: x is not defined
console.log(z); // 150
// 키워드로 인해 전역, 지역이 갈리는 것은 아닌지, let, var, const 모두 테스트 해보세요.








// 3. 블록 스코프 (ES6)(var 키워드 변수는 접근 가능)
// -  `중괄호 안`에서만 접근 가능합니다.
// - 블록 내부에 정의된 변수는 `블록의 실행이 끝나면 해제`됩니다.


// 블록 레벨 스코프
if(true){ // for문이어도 마찬가지입니다.
  let x = 10;
  const y = 10;
}
// console.log(x, y) 

// 밖에 선언된 x는 함수 내부에서도 접근 가능합니다.
let x = 100
function xplus(){
  x = x + 10
}

xplus()
// console.log(x)

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus(){
  let a = 100
  a = a + 10
}

xplus()
// console.log(a) // Error

// 함수 안에 함수
function a(){
  console.log('a 실행')
  function b(){
      console.log('b 실행')
  }
  b()
}

a()
// b() // Error


let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    inner(); // 10, 20,30
    console.log(a, b); // 10, 20
}

outer(); 
// outer()반환값
// 10 20 30
// 10 20
