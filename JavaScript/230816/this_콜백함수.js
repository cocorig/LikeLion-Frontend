
// 콜백함수의 this는 Window를 가리킨다.

[1, 2, 3].forEach(function(){console.log(this)}, [10, 20, 30])
//this는  [ 10, 20, 30 ]

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// thisArg : callback을 실행할 때 this로 사용할 값.
let 인세규정 = {
  책:10,
  영상콘텐츠:50
};

function 인세계산함수(e){
  return e *(this.책/100) //this는 인세규정을 가라캄
};
  
[100, 200, 300].map(인세계산함수, 인세규정);



// 정리!!
// 1. 메서드로 호출한 경우 this는 멤버접근연산자 앞의 객체를 가르킵니다.
// 2. 함수로 호출할 경우 this는 window(node는 global)를 가르킵니다.
// 3. 화살표 함수의 경우 this는 상위스코프를 가르킵니다.
// 4. 생성자 함수 혹은 class의 경우 this는 인스턴스를 가르킵니다.