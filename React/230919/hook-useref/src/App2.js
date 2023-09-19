import React, { useState  , useRef} from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  //  객체안엔 current라는 속성이 있음
  const emailInut = useRef(null);
  const pwInput = useRef(null);


  const inputCheck = (e) => {
    e.preventDefault();
 
    // 이메일 input이나 비밀번호 input의 입력이 완료되지 않은 채 로그인 버튼을 누르면 입력되지 않은 input 태그에 focus해보록 합시다.
    if(emailInut.current.value === ''){
      alert("이메일을 입력해주세요");
      emailInut.current.focus();
      return;
    }else if(pwInput.current.value === ""){
      alert('비밀번호를 입력해주세요');
      pwInput.current.focus();
      return;
    }
    // 화면에 바뀐 값을 나타내주기 위해 useState 안에 넣어줘야함
    setEmailValue(emailInut.current.value)
    setPwValue(pwInput.current.value)


  };

  //  ref로 dom과 연결해주기
  return (
    <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInut}/>
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} >
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;

//  
//  useState보다 더 간편하게 원하는 값을 얻어낼 수 있다.



// useRef는 크게 2가지로 사용이 됩니다.

// 1. 컴포넌트가 다시 렌더링 되어도 초기화 되지 않아야 하는 값을 저장해야할 때 사용합니다. useRef를 통해 저장된 값은 컴포넌트가 다시 렌더링 되어도 변하지 않습니다. 
    
// <aside>
// 💡 useState와 useRef
// useState를 통해 관리하는값 역시 컴포넌트가 다시 렌더링되어도 변하지 않습니다. 이 점에 있어서는 useRef와 동일한데요, 가장 결정적인 차이는 useState의 값이 업데이트 되면 컴포넌트가 다시 렌더링되지만 useRef의 값은 업데이트가 되어도 컴포넌트가 다시 렌더링되지 않는다는 것 입니다.
// 따라서 화면에 표시되어야 하는 정보를 저장할 때는 적합하지 않습니다.

// </aside>

// 2. **컴포넌트의 특정 요소에 직접 접근하고 싶을 때** useRef를 사용합니다. 자바스크립트에서 DOM 노드에 접근하고 싶을때는 `querySelector`나 `getElementById`를 사용하지만 React에서는 `useRef`를 사용합니다.