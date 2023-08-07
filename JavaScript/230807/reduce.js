// 배열의 요소를 모두 더해주고 싶을 경우 아래 reduce메서드를 사용
//누산, 앞의 값과 현재 값을 누적하기 때문에

[10,20,30,40,50].reduce((previousValue,currentValue)=>{
  console.log(previousValue , currentValue);

})
//암기 
// 0(초기값) 이 안들어가면 에러가 날 수도 있다, 순회를 돌지못할때 반환값
