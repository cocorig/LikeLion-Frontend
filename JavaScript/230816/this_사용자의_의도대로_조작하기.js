//  this는 항상 바뀌네?? -> 사용자의 의도대로 조작하려면?? 우리가 필요한 대상으로 고정할 수 있다.
// 함수의 apply(), call(), bind() 메소드를 사용하면 this를 조작하거나 고정해 둘 수 있습니다. 이는 사용자가 원하는 의도대로 binding을 통한 컨트롤을 할 수 있게 합니다.

// 1. call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.

const peter = {
  name : 'Peter Parker',
  sayName : function(감탄사){    
		console.log(this.name + 감탄사);// this가 원래 Peter인데 call로 bruce로 하면 Bruce Wayne 출력
	}
}

const bruce = {
  name : 'Bruce Wayne',
}
peter.sayName.call(bruce); // 인자로 전달하게 되면
peter.sayName.call(bruce, '!' , 10 ,[1,2,3]); //Bruce Wayne!
// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.
// 콤마를 통해 여러 인자값을 전달할 수 있다.


// 2.  apply() : call과 비슷하지만, 인자의 차이인데 콤마로 전달할 것인가, 하나의 배열로 전달할 것인가.

var peter1 = {
  name : 'Peter Parker',
  sayName : function(is, is2){     
		console.log(this.name+ ' is '+ is + ' or ' + is2);
	} //Bruce Wayne is batman or richman
}

var bruce1 = {
  name : 'Bruce Wayne',
}
                           //하나의 단일한 배열로 전달
peter1.sayName.apply(bruce1, ['batman', 'richman']);

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */


//3. bind() 는 this가 고정된 새로운 함수를 반환합니다.


function sayName(){
  console.log(this.name);
}

var bruce2 = {
  name: 'bruce',
  sayName : sayName
}

var peter2 = {
  name : 'peter',
  sayName : sayName.bind(bruce2)// 값을 고정시킬 수 있다.
}

peter2.sayName(); //bruce
bruce2.sayName(); //bruce

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */

// this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리 화살표 함수의 경우 상위 스코프의 this를 가리킵니다. 이러한 방식을 렉시컬(Lexical) 스코프라고 부릅니다.





















// -- 예제------------------------
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
  name: 'hojun',
  age: 25,
  a(){
      console.log(this); 
      console.log(this.name);  
      function b() {
        console.log(this);
        console.log(this.name);
        function c() {
            console.log(this);
            console.log(this.name);
    
          }
          c() // 단독으로 호출하기 때문에 Window를 가리킴
      }
      b() // 그냥 함수로써 실행, 메소드로 실행되는게 아님-> 이런 함수들의 this는 전역공간을 참조하기 때문에  글로벌을 가리키므로 Window를 가리킨다.
  }
}
person.a() // a는 객체의 메소드로써 실행된다.

//출력
// {name: 'hojun', age: 25, a: ƒ}
// hojun

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''
// 메소드로써 실행되는 함수 =  객체 안에 존재하는 함수 ,





//  화살표함수의 this는 자기를 감싸고있는 상위 스코프를 가리킨다. -> 선언만 뵈도 this가 결정이된다 -> 렉시컬 스코핑이라 한다.
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person


const person1 = {
  name: 'hojun',
  age: 25,
  a(){
      console.log(this);
      console.log(this.name);
      let b = () => {
          console.log(this);
          console.log(this.name);
          let c = () => {
              console.log(this);
              console.log(this.name);
          }
          c()
      }
      b()
  }
}
person1.a()

// //출력
// {name: 'hojun', age: 25, a: ƒ} 
// hojun

// {name: 'hojun', age: 25, a: ƒ} 
// hojun

// {name: 'hojun', age: 25, a: ƒ}
// hojun

