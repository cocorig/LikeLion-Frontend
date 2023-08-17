// 1. 구조분해할당을 이용한 아규먼트 처리


// 구조분해 할당을 통해 함수에 전달하는 인자의 기본값을 지정할 수 있습니다.
//  빈 객체로 초기화
function printMe({ name, age, email } = {}) {
  console.log(`이름: ${name}, 나이: ${age}, 이메일: ${email}`);
}
// 위의 코드에서 매개변수에 빈 객체를 할당하고 있습니다. 없어도 잘 동작하지만, 만약 할당하지 않는다면, printMe 함수에 인자를 넘기지 않고 실행했을 때 에러가 발생하게 됩니다. 인자 없이 실행할 경우를 가정한다면 빈 객체를 할당해 안전하게 예외 처리하도록 합시다 
const me = {
  name: '재현',
  age: 25,
  email: 'jaehyun@something.com'
};

printMe(me);

function 함수2([a, b], ...c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

함수2([1, 2], 10, 20, 30, 40);

// function 함수2(a, b, ...c) {
//     console.log(c)
//     return Math.max(...c)
// }

// 함수2('hello', 'world', 10, 20, 30, 40, 50, 60, 70);

// function 함수4({
//     회원등급 = 'Gold',
//     글쓰기 = true,
//     글읽기 = true,
//     채널관리 = true,
//     백업 = '부분가능',
//     소셜로그인여부 = true
// }) {
//     console.log('함수기능')
//     console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
// }

// 함수4({
//     회원등급: 'Silver',
//     소셜로그인여부: true
// })
// function printMe({ name, age, email } = {}) {
//     console.log(`이름: ${name}, 나이: ${age}, 이메일: ${email}`);
// }

// const me = {
//     name: '재현',
//     age: 25,
//     email: 'jaehyun@something.com'
// };

// printMe(me);