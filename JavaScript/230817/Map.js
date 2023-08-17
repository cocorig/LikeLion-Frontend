//  Map 이란?

// Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.

let m = new Map();

// 값 설정 , 값 넣기
m.set('하나', '1');
console.log(m); //Map(1) { '하나' => '1' }
// 값 얻기          key를 씀 , 모든 타입을 key값으로 사용가능 <-> 객체의 key는 문자열만 되지만 map은 모든 타입으로 key를 쓸 수 있다.
// 값에 접근
console.log(m.get('하나')); //1
m.set(true , 0)
console.log(m.get(true));  // 0 반환
// 값 있는지 확인
console.log(m.has('하나')); //true
console.log(m); //Map(2) { '하나' => '1', true => 0 }
// 값 제거
console.log(m.delete('하나'));
console.log(m); //Map(1) { true => 0 }

// Map의 크기를 확인하기
console.log(m.size); // 1

// Map의 모든 데이터를 삭제하기
// m.clear()
const myMap =   new Map();
myMap.set('key1' , 1).set('key2' , 2); // 연속으로 겂넣기가능

// Map 의 여러가지 활용법

console.log(myMap); // Map(2) { 'key1' => 1, 'key2' => 2 }


for (const item of myMap) {
  console.log(item);//[ 'key1', 1 ] , [ 'key2', 2 ]
  console.log(`myMap을 순회하고 있습니다. ${item[0]}`)
  console.log(`myMap을 순회하고 있습니다. ${item[1]}`)
}
// myMap을 순회하고 있습니다. key1
// myMap을 순회하고 있습니다. 1
// myMap을 순회하고 있습니다. key2
// myMap을 순회하고 있습니다. 2



for (const [key, val] of myMap) { //디스크럭쳐를 이용해서 뱌열로도 받을 수 있다
  console.log(`${key}: ${val}`);
}
// key1: 1
// key2: 2

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());


// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
  [2, 20],
  [3, 30],
  [4, 40]]);
  
  console.log(temp); //Map(4) { 1 => 10, 2 => 20, 3 => 30, 4 => 40 }
  
// object 자료형을 맵으로 변환하기
let temp2 = new Map(Object.entries({one:1, two:2}));
// 이 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환합니다.
console.log(temp2); //Map(2) { 'one' => 1, 'two' => 2 }

// 반대의 경우 . 객체형태로 바꾼다.
const temp3 = Object.fromEntries(temp2);
console.log(temp3); //{ one: 1, two: 2 }


// ### Map 과 Object의 차이

// Map 객체와 Object 는 둘 다 key - value 관계를 가진다는 점에서 비슷해보이지만 몇 가지 중요한 차이점이 있습니다

// - Object의 키는 문자열 타입으로만 지정해야하지만, Map의 키는 모든 값을 가질 수 있습니다.
// - Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있습니다.
// -  Map은 데이터를 추가하거나 제거하는 작업에서 Object 보다 더 나은 성능을 보입니다.

objMap = new Map();
objMap.set('one', 1);
objMap.set('two', 2);
objMap.set('three', 3);

console.log(objMap.size); // 3

obj = {hi : 1, hi2 : 2, hi3 :3, hi4: 4};
console.log(obj.length); // undefined
console.log(obj.size); // undefined
console.log(obj);