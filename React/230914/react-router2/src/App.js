import { BrowserRouter, Routes, Route, Link, useLocation, Outlet , useParams} from "react-router-dom";

function App() {
  return (
    <>
    <a href="/cart">홈페이지 이동</a>
    <BrowserRouter>
      <Link to='/'>홈</Link>
      <Link to="/">홈페이지</Link>
      <Link to="/products/"> 상품 상세페이지</Link>
      <Link to="/products/id/notice"> 상품 상세페이지</Link>
      <Link to="/cart">장바구니 </Link>
      <Link to="/users">마이페이지 </Link> 
      <Link to="/users/coupon">쿠폰페이지</Link>
      <Link to="/users/question">질의응답</Link>
      <Link to="/users/notice">공지</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/products" element={<Outlet />}>
          <Route path=":id" element={<ProductDetailPage/>}/>
          <Route path=":id/notice" element={< ProductDetailNoticePage/>}/>
        </Route>

        <Route path="/cart" element={<CartPage />} />

        <Route path="/users" element={<Outlet />}>
          <Route path="" element={<UserPage/>}/>
          <Route path="coupon" element={<CouponPage />} />
          <Route path="question" element={<QuestionPage />} />
          <Route path="notice" element={<NoticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

function HomePage(){
  return <h1>홈페이지.</h1>
}

function ProductDetailPage (){
  const {id} = useParams();
  return <h1>{id} 번 제품 상세페이지 </h1>
}

function ProductDetailNoticePage(){
  const {id } =  useParams();
  return <h1>제품 상세 공지페이지 {id} </h1>
}

function CartPage(){
  return <h1>장바구니 페이지</h1>
}
function CouponPage(){
  return <h1>쿠폰페이지</h1>
}
function QuestionPage(){

  return <h1>질문페이지</h1>
}

function NoticePage(){

  return <h1>공지페이지</h1>
}

function UserPage(){

  return <h1>마이페이지</h1>
}


export default App;