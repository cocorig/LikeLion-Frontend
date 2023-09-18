// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: 배열의 길이
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 문제
// push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]


// 1. splice  요소 추가, 삭제, 교체가 모두 가능합니다.
// // arr.splice(start, deleteCount, item1, item2, ...)
// let arr = [10, 20, 30]
// arr.splice(1, 0, 100) // 1번째에, 0개를 지우고, 100을 넣어라

// let arr = [10, 20, 30]

// let arr = [10, 20, 30]
// arr.splice(1, 1, [100, 200]) // 1번째에, 1개를 지우고, [100, 200]을 넣어라

// ////////////
// // 같이 풀 문제
// let arr = [10, 20, 30, 40]
// let x = [1, 2, 3]
// // 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 100]

// // 방법 1
// let arr = [10, 20, 30, 40]
// let x = [1, 2, 3]
// arr.splice(1, 0, ...x)
// arr.splice(7, 0, ...x) // arr.push(...x) 또는 arr.push(1, 2, 3) 또는 arr.push(...[100, 200, 300])
// arr.push(100)

// // 방법 2
// let arr = [10, 20, 30, 40]
// let x = [1, 2, 3]
// arr.splice(1, 0, x[0], x[1], x[2])
// // 생략

////////////
// splice에서 인자값을 하나만 넣으면, 그 인덱스부터 끝까지 다 지운다.
// splice에서 인자값을 두개만 넣으면, 두번째 인자값부터 끝까지 다 지운다.

let arr = [10, 20, 30, 40];
console.log(arr.splice(1)); //맨 첫번째를 지움  [ 20, 30, 40 ]
console.log(arr); // [10]

let arr = [10, 20, 30, 40];
arr.splice(1, 2) // 1번째부터 2개를 지워라(삽입값은 없습니다.) [20,30]
console.log(arr); // [10, 40]
