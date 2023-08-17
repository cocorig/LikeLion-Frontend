
// 함수의 매개변수를 분해하여 변수에 할당하는 방법입니다.

function myFunc([a, b]) { //[a, b] = [1,2]
  console.log(a);  // 1
  console.log(b); // 2
}

const arr = [1, 2];

myFunc(arr); 



// 위 코드에서는 myFunc라는 함수를 선언하고, 디스트럭쳐링을 사용하여 함수의 매개변수를 변수 a, b에 할당합니다. 이후 전달인자로 [1, 2] 배열을 전달하여 함수를 호출합니다. 함수 안에서는 각 변수의 값이 출력됩니다.

function myFunc1({a, b}){ // { {a: a, b: b} = {a : 1, b : 2}
  console.log(a);  // 1
  console.log(b); // 2
}

const obj = {a : 1, b : 2}

myFunc1(obj); 