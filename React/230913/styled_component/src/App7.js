import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  background-color: blue;
  color: white;
`;

const ExetendedBtn = styled(Btn)`
  color: black;
  border-radius: 5px;
  border: none;
  color: ${(props)=> props.color};
    background-color:  ${(props)=> props.bgColor} 
`;

const App3 = () => {
  return (
    <>
      <Btn>버튼1</Btn>
      <ExetendedBtn>버튼2</ExetendedBtn>
      <ExetendedBtn color="white" bgColor="green">
        버튼3
      </ExetendedBtn>
    </>
  );
};
export default App3;