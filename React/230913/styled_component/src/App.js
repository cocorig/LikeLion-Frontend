import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example";
import reset from "styled-reset"
import Button from "./Components/Button";
// 글로벌 스타일은 `styled-components`가 제공하는 `createGlobalStyle()` 함수를 사용합니다. 

// 글로벌(전역) 스타일은 모든 컴포넌트에서 공통으로 적용되는 스타일을 말합니다. 예를 들어, 웹 페이지의 배경색이나 글꼴 설정 등은 모든 컴포넌트에서 공통으로 사용되는 스타일이므로 전역 스타일로 관리하는 것이 효율적입니다.
//이 글로벌 스타일은 다른 스타일보다 나중에 로딩이 되어 같은 가중치라면 기본적으로 우선순위가 높다는 특징이 있습니다.

// 태그드 템프릿 리터럴을 사용하여 함수를 사용하는 기법
const GlobalStyle =  createGlobalStyle` // CSS 파일을 작성하지 않고도 전역 스타일을 손쉽게 생성할 수 있습니다.
// 리셋 css
${reset}

  span{
    color: red;
    font-size:  12px;
  }
  .box{
    background-color: coral;
  }
  a{
      text-decoration : none;
      color : inherit;
    }

    button{
      border : none;
      cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`
function App() {
  // console.log(reset);
  return (
    <>
    {/* App.js(현재 최상위 컴포넌트) 상단에 추가해주면 모든 하위 컴포넌트에 스타일이 적용됩니다. */}
  {/*  전역 스타일 컴포넌트 */}
      {/* <GlobalStyle/> 
      <h1>hello world</h1>
      <span>hello world 2</span>
      <Example/> */}
      <Button text='버튼'/>
  
    </>
  );
}
export default App;


// const name = '이호준'
// const age = 10

// 인사라는 함수 
// 이때 함수는 문자열 리터럴을 $표현식을 기준으로 나누어 각 부분을 배열의 요소로 전달받아, 이를 이용해 최종적인 문자열을 반환합니다. 이는 ES6 문법입니다. 아래 내용을 참고해주세요.
// 템플릿 리터럴을 함수의 인자로 전달하는 것을 태그드 템플릿

// function 인사(문구, 이름, 나이){
//     // console.log(문구)
//     console.log(문구, 이름, 나이)
//     return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
// }

// const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

// console.log(인사문구) -> 이름은 이호준이고 나이는 40입니다.

//  ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)]