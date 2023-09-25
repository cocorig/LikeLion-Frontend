import React from 'react'
import Spinner from './Spinner';
import styled from 'styled-components';



const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items : center;
  height: 100vh; 
`;
export default function Loading() {
  return (
    <SpinnerContainer>
      <Spinner/>
      </SpinnerContainer>
  )
}
