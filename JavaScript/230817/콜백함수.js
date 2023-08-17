//콜백함수란 함수에 매개변수로 전달되어 실행되는 함수를 의미합니다.

function sum(x, y, 콜백함수){
  콜백함수(x + y);
  return x + y;
}

function documentWriter(s){
  console.log(('콜백함수', s)); // 30
}

sum(10, 20, documentWriter);


// map 의 사용을 통한 콜백함수 
let arr1 = [1, 2, 3, 4, 5];
arr1.map(제곱) // 제곱-> map의 콜백함수
// 인자를 전달해서 사용가능
function 제곱(x){
  return x ** 2
}
/// 인자를 전달하는 함수가 callback함수다. 위의 식과 똑같음
arr1.map(x => x ** 2)


//  forEach의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.forEach(e => console.log(e**2));

function 제곱(x){
  console.log(x**2)
}


// 🤓 first class 언어 -> 함수를 값으로 이용할 수 있다.
// JavaScript에서는 함수를 변수에 할당할 수 있습니다. 이러한 함수를 변수에 할당한 후, 해당 변수를 매개변수로 다른 함수에 전달하거나, 다른 함수의 반환값으로 사용할 수 있습니다. 이렇게 하면 함수를 조합하여 더 복잡한 기능을 수행할 수 있습니다. 이러한 기능을 지원하는 언어를 first class 언어라고 하며 Python, Ruby등이 이러한 언어군에 속합니다.

//해당 변수를 매개변수로 다른 함수에 전달하거나, 다른 함수의 반환값으로 사용할 수 있습니다.
function func(func1){ // 함수를 인자로 전달하면 callback함수

}
function func1(){

}
//함수를 변수에 할당할 수 있습니다.
const myFunc = func1(){};

