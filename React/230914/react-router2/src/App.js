// npm i react-router-dom
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

// 컴포넌트?
const Index = () => <h1>나 index야!</h1>
const One = ({name}) => <h1>나 {name} 이야!</h1>
const Two = () => <h1>나 Two야!</h1>
const Three = () => <h1>나 Three야!</h1>

const BlogDetail = () => {
  // 현재 경로에서 추출한 'id값을 가져옴, 이 `id`는 브라우저의 URL에서 ":id" 부분에 해당하는 동적 경로 매개변수이다.
  const { id } = useParams()
  const [items, setItems] = useState([]) //`items`는 블로그 게시물의 정보를 저장할 상태
 
  //블로그 게시물 정보를 가져오는 비동기 작업을 처리한다.
  useEffect(()=>{
    const getData = async () => { //getData 비동기 함수 , 주어진 id를 사용해 API에서 블로그 게시물 정보를 가져오는 비동기 요청을 수행
      const res = await fetch(`http://test.api.weniv.co.kr/mall/${id}`)
      const result = await res.json() //: API에서 반환된 데이터를 JSON 형식으로 파싱하고, 결과를 `result` 변수에 저장한다.
      setItems(result) // 받아온 데이터를 결과 배열에 넣어준다,
    }
    getData()
  }, [items]) // items이 변경될 때마다  배열이 변경될 때마다 이 효과가 다시 실행된다.

  return (
    <div>
      <h1>나 BloeDetails야!</h1>
      <p>{id} 블로그 내용</p>
      <p>{items.productName}</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link><br />
      <Link to="/one"> one </Link><br />
      <Link to="/two"> two </Link><br />
      <Link to="/three"> three </Link><br />
      <Link to="/blog/1"> 1번 게시물 </Link><br />
      <Link to="/blog/2"> 2번 게시물 </Link><br />
      <Link to="/blog/3"> 3번 게시물 </Link><br />
      <Link to="/blog/4"> 4번 게시물 </Link><br />
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        <Route path="/blog/:id" element={<BlogDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// JavaScript에서 비동기 작업을 다루는 주요 방법은 다음과 같습니다:

// 콜백 함수 (Callback Functions): 함수를 다른 함수의 인자로 전달하여 비동기 작업이 완료되면 호출되도록 하는 방식입니다.

// Promise: Promise 객체를 사용하여 비동기 작업을 추상화하고, .then() 및 .catch() 메서드를 사용하여 작업 완료 또는 오류 처리를 관리합니다.

// Async/Await: async 및 await 키워드를 사용하여 비동기 코드를 동기적으로 작성하고, 코드를 더 읽기 쉽게 만듭니다.