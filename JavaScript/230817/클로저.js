// 클로저(Closure)
// 클로저란 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉입니다.
// 내부함수가 외부함수의 공간에 접근하는게 가능하다.


function makeAdder(x) {
  var y = 1;
  return function(z) {
      y = 100;
      return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝

const person =  function (){
  let age  = 15; 
  // 객체를 return함으로써 휘발되는데 age는 함수가 사라져도 age는 메모리에 남아있다. 외부에서 절대 접근할 수  없게하고,getAge,setAge로만 값을 수정하고 꺼내올때 사용하는게 클로저.
 // 참조가 연결돼있기 때문에 값이 사라지지않는다 
  return {
    name: 'John',

    getAge : function () { 
      return age; 
    },

    setAge: function (value) {
      age = value;
    }
  }
}
 // 게터세터함수
const man = person();

const outer = function () {
  let a = 1;

  const inner = function () {
      let b = 5;
      let c = 6;
      a = a + b + c;

      console.log(a);
  }

  return inner;
}

const newInner = outer();

newInner();



//person이 return이 되면 person이라는 함수는 사라지지만,person의 내부 메서드에서 age를 참조하고 있기때문에 age는 메모리에 남아있다.
//age에 대한 접근 권한은 getAge를 통해 접근하고,setAge를 통해서만 수정이 가능하다.

// 때문에 함부로 수정할 수 없는 데이터를 관리 할 수 있는 디자인패턴으로 유용하다.

// const Info = function (name) {
//   let Address = "한국";
//   return {
//     name: name,
//     getAddress() {
//       return Address;
//     },
//     setAddress(string) {
//       Address = string;
//     },
//   };
// };

// const myInfo = Info("지현");
// myInfo.setAddress("부평");

// console.log(myInfo);