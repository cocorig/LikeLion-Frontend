
// 함수 스코프
const func1 = function(){
  var a = 1; // a라는 변수에 사용할 수 있눈것
	var b = 2;
  
  console.log(a + b);// 3
};

var a = 20;

func1();

// 스코프는 하나의 공간