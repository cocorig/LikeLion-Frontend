import {useState, useEffect} from 'react'

// useEffect(()=>{
	// state가 변경되어 렌더링 될 때 실행하는 부분!
	// 공부하려고 책 펴는 타이밍!
	// return()=>{
    // 언마운트 또는 다음 이펙트가 일어나기전에 실행하는 부분
    // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    // 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠. 
    // 여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
	// }
// },[/*state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.*/)]) 

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1);
  }
  useEffect(()=>{
    console.log("이펙트~!");
    if (count%2===0) {
      console.log(count, "짝수입니다~!");
    } else {
      console.log(count, "홀수입니다~!");
    }
    return ()=>{
      console.log(count,"이펙트가 일어나기 직전입니다~!")
    }
  })
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;

// 최초 interval -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개

// 1초마다 setState후 -> cleanup에서 cleaerinterval을 통해 interval삭제 -> 총0개 -> interval추가 생성 -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개 -> 반복

// 최초 렌더
// -> 인터벌(1초마다 setState가 일어남)하나가 생성됨
// -> 1초뒤 setState가 일어남
// -> setState가 일어나서 리렌더링이 일어남
// -> 또 렌더가 되면서 인터벌 하나가 더 추가됨.
// -> 이제 1초뒤 setState가 2번일어남..
// -> 렌더가 2번일어남
// -> 인터벌이 2개가 추가됨
// -> 이제 1초에 setState하는게 4개가 쌓인다.
// -> 1초뒤에 setState 4번이 일어남
// -> 리렌더링이 몇번 4번
// -> 인터벌이 4개 추가됨
// -> 총 1초에 setState하는게 8개 쌓인다.

// 1번 만들어진 setInterval은 지워지지 않습니다
// 최초 interval -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개

// 1초마다 setState후 interval추가 생성 -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 2개

// 1초마다 setState후 interval추가 생성(2번일어남) -> 1초에 1번 setState 해주는 interval이 2개추가됨 -> 총 4개
// 컴퓨터특성상 정확히 이런식으로 추가되진않지만
// 이런 느낌으로 interval이 쌓이게 됩니다