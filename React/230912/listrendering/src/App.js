

function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  //1~10호를 만들 것입니다.

  // forEach 로 리스트 작성해보기
  // const numComponentsArray = [];
  // num.forEach((i, index) => {
  //   numComponentsArray.push(<h1 key={index}>안녕, {name} {i}호</h1>);
  // })

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i)=><h1>안녕, {name} {i}호</h1>);

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

export default App;


// key 값은 동일한 컴포넌트 리스트에서만 ‘유일값’이면 됩니다.
// react-jsx-dev-runtime.development.js:62 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Hello`. See https://reactjs.org/link/warning-keys for more information.
// at h1
// at Hello (http://localhost:3000/main.bc29e9abb4dd01a74b2b.hot-update.js:31:22)
// at App

// **"리스트 각 요소가 고유한 key 값을 가지지 않았다."**라는 경고 메세지입니다.  key 값을 넣어주지 않았기 때문에 에러가 발생한 것입니다. 컴포넌트 안에서 리스트를 렌더링할 때는 꼭 key 값을 넣어줘야 합니다.

// 키값을 넣어주는 이유는 리엑트에서 랜더링 작업을 진행했을 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함입니다. key가 없다면 하나의 요소가 변경이 되어도 array에 담긴 요소를 모두 다시 그려줍니다.


// key 값은 일반적으로 배열의 id 값을 넣어줍니다. 고유의 값을 찾을 수 없다면 인덱스를 key로 사용하면 되지만 단순히 에러를 제거하기 위한 미봉책일 뿐 권장하지 않습니다

// key를 index로 정하는건 의미가없다.