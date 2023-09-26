import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sale, soldout } from '../modules/stockCounter'



export default function StockCounter() {

   // useSelector : store의 상태 조회 Hook
    const { message } = useSelector((state) => {
    return {
        message :  state.stockReducer.message,
    }
});
  // 재고상태를 알아야하기 때문에 store의 state에 접근한다.
const { stock } = useSelector((state) => {
  return {
      stock: state.goodsReducer.stock,
    
  }
});
  
  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch();

  

  // 이렇게만 하면 무한 렌더링에 빠짐..sale()을 디스패치로 전달하면서 계속 새로 렌더링, 디스패치 반복  무한루프
  // if(stock <= 0){
  //  dispatch(soldout()); 
  // }else{
  //   dispatch(sale()); 
  // }

  // // useEffect를 사용하여 재고 변화에 따라 액션을 디스패치
  useEffect(()=>{
     // 재고가 0보다 작거나 같으면 품절 표시, 아니면 판매 중 표시
    if(stock <= 0){
      dispatch(soldout());  // 판매 중 메세지를 출력하는 액션
    }else{
      dispatch(sale());  // 품절 메세지를 출력하는 액션
    }
  } , [stock]) // // stock 값이 변경될 때만 useEffect 실행
  return (
    <div>{message}</div>
  )
}
