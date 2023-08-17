// 구조 분해 할당

//디스트럭쳐링 (destructuring) - 구조를 해체하는 행위

// 배열이나 객체와 같은 데이터 구조를 `분해하여` 변수에 `할당하는` 표현식입

// 1.1 갹체의 디스트럭쳐링

// (ES5) 이전의 배열 분해 할당 방법 (변수선언, 객체 키에 일일히 접근, 값 할당) -> 문법적 오류는 전혀 없지만 , 번거로움
// 할당하고자 하는 값에 해당하는 변수 선언이 필요하기 때문에, n개의 할당을 해주고자 하면 n줄의 코드 작성이 필요합니다.

// let food1, food2, food3;

// const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

// food1 = categories.food1;
// food2 = categories.food2;
// food3 = categories.food3;

// console.log(food1, food2, food3); //과일 채소 육류
       //변수                      // 키 값을 이용해서 뱐수를 선언한다
const {food1, food2, food3} =   {food1 : '과일', food2 : '채소', food3 : '육류'};
console.log(food1, food2, food3); //과일 채소 육류

const  {food1 : f1, food2 : f2, food3 : f3} =  {food1 : '과일', food2 : '채소', food3 : '육류'};
console.log(f1, f2, f3); // 과일 채소 육류

// let obj = {one: 1, two : 2};
// let myNum = obj.one;
// console.log(myNum);  // 1

let obj = {one: 1, two : 2};
// 디스트럭쳐링 부분
let {one: myNum} = obj;
console.log(myNum);

// 객체 리터널이 왼쪽에 있는가, 오른쪽에 있는가에 따라 역할이 달라진다
// 자바스크립트 엔진은 단순히 할당연산자( = ) 의 왼쪽에 있으면 디스트럭쳐링, 오른쪽에 있으면 객체 리터럴로 해석합니다


// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
let {one: myNum1} = {one: 1}

// 객체리터럴 값에 접근
const obj1 = {one : 1};
console.log(obj1.one);

// 값 : 키  =  키 : 값 . 키와 값의 이름이 동일해야지만 값이 들어간다.
// {one: myNum1} 
console.log(myNum1); // 1

// 이름을 동일하게 지어도 상관없습니다. 이제 데이터의 이름은 myNum 에서 one 으로 바뀌었습니다. 이름과 :를 생략할 수 있다.
let {one: one} = {one: 1}  //  -> let {one} = {one: 1}
console.log(one); // 1


let {one1, two, three, four} = {one1: 1}
// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성할 수 있습니다.
console.log(one1); /// 1 
console.log(two); //undefined
console.log(three); //undefined
console.log(four); // undefined


const food = {value1 : '과일', value2 : '채소', value3 : '육류'};

function objReturn(){
  return food // 객체형태를 반환해서 값을 저장할 때 구조분해를 해서 값을 저장할 수 있다.(코드 깔끔)
}
// 반환값을 바로 디스트럭쳐링합니다.
const {value1, value2, value3} = objReturn();//{ value1: '과일', value2: '채소', value3: '육류' }

console.log(value1, value2, value3); //과일 채소 육류

const obj2 = {ex1 : '1' , ex2 : '2' , ex3 : '3'};

const {ex1, ex2, ex3} = {...obj2 , ex1 : '10'};
console.log(ex1); // '10'



// ####  디스트럭쳐링의 기본 구조 #####
// let obj = {one: 1, two : 2};
// let myNum = obj.one;
// console.log(myNum);

// let obj = {one: 1, two : 2};
// let {one: myNum} = obj;
// console.log(myNum);