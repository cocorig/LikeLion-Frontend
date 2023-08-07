   
const arr =  [10,20,30,40];
console.log(arr.slice(1,3));//1에서 2번째까지 - > [ 20, 30 ]
//원본은 그대로
console.log(arr); // [ 10, 20, 30, 40 ]
console.log(arr.slice(1,10000)); // index에 없는 값도 오루가 나지 않는다 ==  splice도 마찬가지
console.log(arr.slice(100,10000)); // index에 없는 값도 오루가 나지 않는다 ==  splice도 마찬가지

// 2. slice
// arr.slice(start, end)
// 주의! 원본은 수정되지 않습니다!
// 비교! splice는 원본을 수정합니다!
let arr = [10, 20, 30, 40]
arr.slice(1, 3) // 1번째부터 3번째 전까지(2번째까지) 자른다.
arr.slice(1, 10000) // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.
arr.slice(100, 10000) // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.