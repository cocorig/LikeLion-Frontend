// import React from 'react'

// let guest = 0;


// function Cup(){
//   guest =  guest + 1;
//   return <h2>{guest}번 손님을 위한 컵입니다.</h2>
// }
// export default function App3() {
//   return (
//     // 리액트는 컴포넌트가 순수하길 바람, 잘못쓰고 있다는 뜻 , 이렇게 컴포넌트 쓰면안돼! 경고
//     <div>
//       <Cup/>
//       <Cup/>
//       <Cup/>
//       <Cup/>
//     </div>
//   )
// }


import React from 'react'

function Cup({guest}){
  return <h2>{guest}번 손님을 위한 컵입니다.</h2>
}
export default function App3() {
  return (
    // 리액트는 컴포넌트가 순수하길 바람, 잘못쓰고 있다는 뜻 , 이렇게 컴포넌트 쓰면안돼! 경고
    <div>
      <Cup  guest = {1}/>
      <Cup  guest = {2}/>
      <Cup  guest = {3}/>
      <Cup  guest = {4}/>
    </div>
  )
}
