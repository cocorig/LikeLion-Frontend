import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    margin: 40px;
`;

const ContentH2 = styled.h2`
    
    color: ${(props) => (
      /* console.log(props) */
      props.name === 'hello'? 'red' : 'black'
      )};
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;

const ContentOne =  styled.p`
  color: coral;
  `
const ContentTwo = styled.p`
  color: skyblue;
`
const ContentThree = styled(ContentDiv)`
  border: 1px solid pink;
`
//<div class="sc-ciJnBw sc-iAfmwU bSUjFf bIfDqT">
//  hello world
// </div>
const App = () => {
    return (
      
        <ContentDiv>
            <ContentH2 name="hello">Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </ContentDiv>
    );
};

export default App;