import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //  BrowserRouter :  UI와 URL을 연결합니다. 마치 MPA과 같이 URL을 사용할 수 있게합니다.
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      {/*  Routes :  현재 URL과 매칭된 UI를 렌더링 하는 역할을 합니다 */}
      <Routes>
        {/*Route :  URL이 변경되면  <Routes> 는 모든 자식 <Route>
를 살펴보고 가장 알맞는 것을 매칭합니다. */}
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;