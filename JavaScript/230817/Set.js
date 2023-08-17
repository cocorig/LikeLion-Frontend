
// ###  Set 이란?  중복을 허용하지 않는다. 중복 데이터 제거

// Set은 모든 타입의 값을 저장하는 객체자료형의 한 종류입니다. 이때 객체 안의 값은 중복을 허용하지 않습니다.

let s = new Set('abcdeeeeeeeee');
console.log(s); // Set(5) { 'a', 'b', 'c', 'd', 'e' }
console.log(s.size); //5

// Set에 값을 추가하기
s.add('f');
console.log(s);

// Set을 순환하기
for (let variable of s) {
  console.log(variable);
}
// 이미 존쟈하는 데이터 넣기 , 중복되는 데이터를 add로 추가하면 무시한다. -> set른 독립적인 값만 존재


// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
console.log(ss.has('a'));

// Set의 모든 값을 제거하기 
ss.clear()
console.log(ss);



// 예시

let a = new Set('abc'); // new는 객체를 반환
let b = new Set('cde'); 
console.log(a); //Set(3) { 'a', 'b', 'c' }
console.log(b); //Set(3) { 'c', 'd', 'e' }


console.log([...a]); 
// -> 전개구문으로 풀어서 배열로 만들어준다!>>!!?! [ 'a', 'b', 'c' ]

// 교집합
let cross = [...a].filter(value => b.has(value));
console.log(cross); /// [ 'c' ]

// 합집합
let union = new Set([...a].concat(...b));
console.log(union); //Set(5) { 'a', 'b', 'c', 'd', 'e' }

// 차집합 , b에 없는 값들을 찾는다.
let dif = [...a].filter(x => !b.has(x));
console.log(dif); //[ 'a', 'b' ]







//  조건문으로 중복제거
function lottoGenerator() {
  const lottArr = [];

  while (lottArr.length < 6) {

      // 1 ~ 44.999999
      const result = parseInt(Math.random() * 45 + 1);
    
      if (!lottArr.includes(result)) {
          lottArr.push(result);
      }
  }

  return lottArr;
}

//위의 코드 조건문 최적화
// set으로 바꿔봄 -> set은 중복된 값을 무시하기때문에 그냥 답을 추가하기만 하면 됨
const lottoSet = new Set();

while (lottoSet.size < 6) {

    const result = parseInt(Math.random() * 45 + 1);
    lottoSet.add(result);
}

return (lottoSet);



