import React from 'react'
import styled , {css} from "styled-components";


const BorderNone = css` border: none;`;

const BorderRadius = css` border-radius: 8px;`;

const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

const ContentBox = styled.div`
  border: 1px solid black;
  display: flex;
  padding:2em;
  justify-content: space-between;
  align-items: center;
`
const Button1 =  styled.button`
  background-color : #3d4d86;
  color: wheat;
  padding: 2em;
  font-size: 2rem;
  cursor: pointer;
`

// const Button2 = styled(Button1)`
//    /* border-radius: 1em; */
//   ${BorderRadius}
//    /* border: none; */
//    ${BorderNone}
//      /* box-shadow: 5px 5px 5px 5px gray; */
//    ${BoxShadow}
//    color: black;
//    font-weight: bold;
 
// `
// const Button3 =  styled(Button2)`
//   background-color: blue;
//   color: white;
  
// `
const ExtenedBtn =  styled(Button1)`
    font-weight: bold;
     /* border-radius: 1em; */
     ${BorderRadius}
   /* border: none; */
   ${BorderNone}
     /* box-shadow: 5px 5px 5px 5px gray; */
   ${BoxShadow}
   color: ${(props)=> props.color};
    background-color:  ${(props)=> props.bgColor} 

`


export default function Button({text}) {
  return (
    
     <ContentBox>
      <Button1>{text}</Button1>
      <ExtenedBtn color='black' bgColor="pink">{text}</ExtenedBtn>
      <ExtenedBtn color='white' bgColor="coral">{text}</ExtenedBtn>
     </ContentBox>
    
  )
}
