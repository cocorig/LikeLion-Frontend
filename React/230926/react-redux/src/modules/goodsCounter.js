
//  액션을 생성하는 함수
export const addNumber = () =>{
  return {type : 'ADD'}
}

export const subtractNumber = ()=>{
  return {type:  'SUBSTRACT'}
}



const initState = {
  stock : 10, // 상품 재고
  goods : 1
}


//  굿즈 리듀서 생성
const goodsReducer = (state = initState , action)=>{
  switch(action.type){
    case 'ADD':
      return {
        ...state,
        stock :  state.stock -1,
        goods : state.goods + 1
      }
    case 'SUBSTRACT':
      return {
        ...state,
        stock :  state.stock  + 1,
        goods : state.goods  -  1
      }
      default : 
      return  state;
  }
}

export default goodsReducer;