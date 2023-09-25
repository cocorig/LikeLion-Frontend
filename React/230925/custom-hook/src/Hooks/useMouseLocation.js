import { useEffect, useState } from "react";

// 함수로 생성 
function useMouseLocation(initVal){
  // 안에 값이 있다면 첫번째 값 반환 , 만약 없다면 마지막 false값 반환 {}
  const [mouseLocation , setMouseLocation] = useState(
    initVal || {x : null, y : null});
  // DOM 을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation를 업데이트해보자.

  // 컴포넌트가 그려진 다음에 이벤트 실행
  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      setMouseLocation({
        x : e.x,
        y :  e.y
      });
    // 이벤트 종료학고 싶을 때 코드 
    })
  } , [])
  return mouseLocation;
}

export default useMouseLocation;