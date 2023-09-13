import React from "react";
import styled from "styled-components";


// 확장해서 사용할수 있음
const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;  // styled은 컴포넌트를 반환함
// ContentTwo는 그대로 두고 border을 주고싶으면 이렇게 스타일을 줘서 확장해서 사용
const ContentThree = styled(ContentTwo)` //ContentTwo의 태그와 스타일을  그대로 가져와 거기에 추가하는것 ,, 
    color: blue;
    border: 1px solid black; // 이건 그냥 문자열 로
`

//내가만든 컴포넌트
function myComponent(props){
  // className이 있어야 styled-componets기능을 이용해 확장가능!
  return (
    <div className={props.className}>이것은 새로운 컴포넌트</div>
  )
}

//// 내가만든 컴포넌트 확장하기!
const myComponentTwo =  styled(myComponent)`
  
  background-color: pink;
`
function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
            <myComponentTwo/>
        </div>
    );
}

export default App;