import './App.css';
import './Timer';
import Timer from './Timer';

function App() {
  let today = new Date();   

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
  let seconds = today.getSeconds();  // 초

  switch (day){
      
    case 0: 
      day = "일";
      break; 
    case 1: 
      day = "월";
      break; 
    case 2:
      day = "화";
      break;
    case 3:
      day = "수"; 
      break;
    case 4:
      day = "목"; 
      break; 
    case 5:
      day = "금"; 
      break; 
      default : 
        day = "토"; 
        break; 
  }
  

  const name = 'licat'
  const 멋사인 = ()=>{
    return '하연';
  }
  const someStyle = {backgroundColor:"black", color:"white"}
  // jsx
  return (
    <div className="App">
      {/* 인라인 스타일적용은 중괄호를 통해 객체로 표시 "key":value,	
*/} 
      <Timer></Timer>
   	  <h1 style={{backgroundColor:'pink'}}>안녕, {name} 1호!</h1>
			<h1 className='newClass'>안녕, 라이캣 2호!</h1>
      <input type="text" maxLength={10} disabled></input>

{/* 배열을 반환하면 배열을 펼쳐서 써준다 */}
      <p>{[1, 2, 3].map(x => x**2)}</p>
      <p style={someStyle}>{멋사인()}</p>
      <p>{멋사인() === '하연' ?'one':'two'}</p> 
      
      <div style={{backgroundColor : 'black' , color :'white'}}>
        <h1 style={{color : 'pink'}}>{year}년 </h1>
        <h2>{month }월/{date}일 {day}요일 </h2>
        <h3>시간 :{hours}시 {minutes}분 {seconds}초</h3>
      </div>
    </div>
  );
}

// (1) class명은 className 으로 사용한다.

// (2) 속성값은 중괄호({})로 묶는다

// (3) style 중괄호 안에 객체가 있어야 함({ { } })

// (4) 카멜케이스로 작성한다. (backgroundColor)

// function TextArea() {
//   return (
//     <div className="wrapper">
      
//       <textarea
//         readOnly
//         maxlength={3}
//         style={{backgroundColor: 'blue'}}
//       />
//     </div>
//   );   
// }
export default App;

// HTML 문법과 JSX는 비슷하지만 여러 차이점을 가지고 있습니다
// 1. 모든 JSX 속성 이름은 카멜 케이스(CamelCase) 대문자 구분을 따릅니다. (ex. `maxlength`, `tabindex`)
// 2. 문자를 제외한 속성값은 중괄호({ })를 사용합니다.
// 3. 'true' 값을 갖는 속성은 속성 이름만으로 표현할 수 있습니다. 만약 false라면 중괄호를 사용합니다.
// 4. 'class' 속성은 'className'으로 표기합니다.
// 5. 인라인 스타일은 객체 형태로 사용합니다.

// 왜 background-color라고 작성할 수 없을까요? 우리가 class 라는 텍스트를 사용할 수 없는 이유와 연결지어 생각해봅시다.
// -> jsx도 js이기때문에 js에서 변수를 설정할 때 카멜케이스가 포함되면안됨
// 때문에 background-color를 jsx에서 변수로 사용할 수 없다. 



// function App() {

//   const time = new Date();
//   const year = time.getFullYear();
//   const month = time.getMonth();
//   const date = time.getDate();
//   const hour = time.getHours();
//   const min = time.getMinutes();
//   const sec = time.getSeconds();

//   return (
//     <div style={{ backgroundColor: 'black', color: 'white' }}>
//       <h1 style={{ color: 'red' }}>년 : {year}</h1>
//       <h2>월/일 : {month + 1}/{date}</h2>
//       <h3>시간 : {hour}시 {min}분 {sec}초</h3>
//     </div>
//   );
// }

// export default App;