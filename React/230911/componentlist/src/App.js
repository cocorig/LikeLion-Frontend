import React from 'react'
import Hello from "./components/Hello";
import HelloProps from "./components/HelloProps";
import Resume from "./components/Resume";
import Time from "./components/Time";
import ColorText from "./components/ColorText";
import App2 from './App2';

// 이렇게 만든 <Licat/>과 <Time/>을 컴포넌트라고 부릅니다
// 컴포넌트의 이름을 지을 때는 첫 글자를 대문자로 작성해야 컴포넌트로 해석됩니다.


// test.js 모듈에서 내보내는 test함수, test2 함수를 App.js 모듈에서 가져올 때 사용되는 모듈문법.
// test는 export default로 내보낸거라 test만 써준거고
// export 키워드를 사용해서 내보낸 test2를 import할 땐 중괄호를 써서 객체의 모양 {test2} 으로 가져온다.

// 모듈 문법의 특징

import test ,{test2} from './components/test';
function App(){
  test();
  test2()
  return (
    
    <div>

      <App2/>
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