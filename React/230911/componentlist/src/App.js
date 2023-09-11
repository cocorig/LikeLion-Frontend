import React from 'react'
import Hello from "./components/Hello";
import HelloProps from "./components/HelloProps";
import Resume from "./components/Resume";
import Time from "./components/Time";
import ColorText from "./components/ColorText";

// 이렇게 만든 <Licat/>과 <Time/> 을 컴포넌트라고 부릅니다
// 컴포넌트의 이름을 지을 때는 첫 글자를 대문자로 작성해야 컴포넌트로 해석됩니다.

function App() {
 
  return (

    <div>
      <ColorText color="skyblue"/>
      <ColorText color="royalblue"/>
      <ColorText color="hotpink"/>
      <Hello name="gary"/>
      <Time />
      <HelloProps 
        name='hayeon' 
        age = {20} 
        someFunc={()=> 'awesome!!'} 
        someArr = {[1,2,3]}
        someObj={{one : 1 , two :2}}
      />
     	 <Resume
        hello="안녕하세요" name="코코" hobby="우다다 하기" food="츄르" color='colar'/>
    </div>

  );
}

export default App;