import React from 'react'
import styled, {keyframes} from 'styled-components'

// keyframes 적용
const rotation = keyframes`
  from{
    transform:  rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
  
`
const dash = keyframes`
/*  줄 간격을 결정 */
0%{
  stroke-dasharray : 1, 200;
  stroke-dashoffset : 0;
}
50%{
  stroke-dasharray : 80, 200;
  stroke-dashoffset : -35;
}
100%{
  stroke-dasharray : 80, 200;
  stroke-dashoffset : -124;
}
`

const SpinnerBox = styled.svg`
    width: 200px;
    height: 200px;
    animation: ${rotation} 1.5s linear infinite;
  
`
const Circle = styled.circle`
  fill: none;
  stroke-width: 2;
  stroke: black;
  animation: ${dash} 1.5s ease-in-out infinite; 
  /* stroke-dasharray는 선을 대쉬 형태로 만든다. (값을 부여한 만큼 대쉬길이가 늘어남) 
  stroke-dasharray: 200;
  /* stroke-dashoffset : svg 이미지의 stroke-dasharray을 최대값으로 설정한다.
  stroke-dashoffset: 200; */
`


export default function Spinner() {
  return (

      <SpinnerBox viewBox='0 0 100 100'>
        <Circle cx={50} cy={50} r={20}/>
      </SpinnerBox>

  )
}
