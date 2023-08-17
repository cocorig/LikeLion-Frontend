const arr = [1, 2, 3];

const [a, b, c , d , e] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); //undefined
console.log(e); //undefined
// 선언된 변수의 순서대로 값이 들어감,
//  객체처럼 키가 없기 때문에 순서대로 들어감,