import React, { useState, useEffect, useRef } from 'react';

// 값을 저장을 하고있지만 useState와 다르게 화면을 업데이트하지않는다.
// 업데이트, 재렌더링 , 다시실행하는데 useState , useRef는 업데이트되어도 원래의 값을 없애지않고 계속 가지고있는다 , countFour는 다시 0으로 초기화

function Counter(){
  const [count , setCount] = useState(0);
  const [countTwo , setCountTwo] = useState(0);
  const countThree = useRef(0);
  let countFour = 0;
  // console.log(countThree);

 // 랜더링 됨
 const handleCountUp = () => {
  setCount(count + 1)
  console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
}
// 랜더링 됨
const handleCountUpTwo = () => {
  setCountTwo(countTwo + 1)
  console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
}
// 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
const handleCountUpThree = () => {
  countThree.current += 1;
  console.log(countThree.current)
}
// 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
const handleCountUpFour = () => {
  countFour +=  1;
  console.log(countFour)
}
// useEffect : 돔을 화면에 (랜더링)그려주는 기능 , 함수가 전달하고자 하는 리턴값이 무엇인가 , 이펙트가 무엇인가
useEffect(() => {
  console.log('count가 감시되고 있습니다.') 
  console.log(`감시된 변수 : ${count}`)
}, [count]) // count가 변경되는 것을 감시

  return (
    <>
      {/* useState :  값이 변경되면 화면에 업데이트된다 */}
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>

      {/* useRef :  값이 변해도 화면에 갱신이 되지않는다 */}
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )  
}
//Object
// current: 0
// [[Prototype]]: Object


function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}
export default App;


//마운트 : 렌더링할 떼
//업데이트  : 화면이 바껴ㄴ야할 때


