//즉시 실행함수 -> 요즘엔 잘 사용하지 않는다.
//function scope를 이용하기 때문에  메모리 효율적입니다.

// 이름 없이도 실행 가능
// 익명 즉시 실행 함수 
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수 -> 이름을 넣을 필요가 없다, 외부에서 호출 불가능 -> 함수는 실행하고 바로 없어짐 return
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());

// foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
(()=> {
  return 0;
})


