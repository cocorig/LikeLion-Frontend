import React, { useState } from 'react'
import Login from './components/Login';
import Homepage from './components/Homepage';

export default function App3() {
  // user 정보
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);

    // 처음엔 false니까 Login 컴포넌트 렌더링 Login컴포넌트에 user정보 객체와 로그인 상태를 저장하는 함수 setLogins를 props로 보낸다.

    // setLogin이 true면 , 로그인에 성공하면 Homepage렌더링
    return (
        login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />
    )
}