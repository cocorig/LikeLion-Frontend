// import { useState, useMemo } from 'react'

// function 부하() {
//   // console.time();
//   let s = 0
//   for (let i = 0; i < 1000000000; i++) {
//     s += i
//   }
//   // console.timeEnd();
//   return s
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [countTwo, setCountTwo] = useState(0);

//   let result = useMemo(() => {
//     return 부하();
//   }, [countTwo]);


//   const handleCountUp = (e) => {
//     setCount(count + 1)
//     console.log(count)
//   }

//   const handleCountUpTwo = (e) => {
//     setCountTwo(countTwo + 1)
//     console.log(countTwo);
//   }

//   return (
//     <div>
//       <h1>계산 결과 : {result}</h1>
//       <div>{count}</div>
//       <div>{countTwo}</div>
//       <button onClick={handleCountUp}>UP!</button>
//       <button onClick={handleCountUpTwo}>UP2!</button>
//     </div>
//   );
// }
// export default App;

import { useState , useMemo} from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}


// const 저장할변수 = useMemo(()=> {
//   return 계산하는_무거운함수()
// }, [감시하고_있는_변수]);


function App() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)


  const handleCountUp = (e) =>{
    setCount(count + 1);
    console.log(count);
  }
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }
  

  console.log('렌더링');

  let result = useMemo(()=>{
    return 부하() // 여기서 s값이 들어옴
  } , [countTwo]) // //만약 의존배열이 없다면 콜백함수를 무조건 실행합니다.

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default App;