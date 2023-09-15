import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;

// // Link 작성하는 방법

// 문자열
{/* <Link to="/courses?sort=name&sorting=asc" />

// 객체
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name&sorting=asc",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/> */}

// pathname: 이동할 경로를 나타내는 문자열입니다. 예를 들어, to="/about" 과 같이 사용할 수 있습니다

// search: ?sort=name 이 포함된 /about 경로로 이동합니다.

// to={{ pathname: '/about', hash: '#contact' }} 와 같이 객체 형태로 전달할 수 있습니다. 이 경우 /about#contact 경로로 이동합니다.

// state: 이동할 경로와 함께 전달할 상태 정보입니다. to={{ pathname: '/about', state: { fromDashboard: true } }} 와 같이 객체 형태로 전달할 수 있습니다. 이 경우 /about 경로로 이동하면서 fromDashboard: true 라는 상태 정보를 함께 전달합니다.

//  Link의 경우  HTML5 History API를 사용해서 브라우저의 주소를 바꿔주는 것이기 때문에 페이지를 불러오지 않고 dom만 조작해서 페이지를 보여줍니다.