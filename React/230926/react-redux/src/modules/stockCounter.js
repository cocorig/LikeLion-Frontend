export const sale = () =>{
  return {type : 'SALE'};
};
//  action을 함수로 작성함으로써 type의 오타를 막을 수 있다.
export const soldout = () =>{
  return { type: "SOLD_OUT" };
}


const initalState = {
  message :  '판매중!!'
}
const stockReducer = (state =  initalState , action) =>{
  switch(action.type){
    case "SALE" :
      return {
        ...state,
        message : "판매 중"
      }
      case "SOLD_OUT" :
        return {
          ...state,
          message : "품절"
        }
        default :
        return state;
  }
}
export default stockReducer;