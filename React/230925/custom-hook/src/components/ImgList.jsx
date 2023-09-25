import React from 'react'
import ImgItem from './ImgItem'
import { styled } from 'styled-components';


const Wrap = styled.div`
  text-align: center;
  /* padding: 2em; */
  max-width: 1800px;
  margin: 0 auto;

`
const Header = styled.header`
  background-color: black;
  padding: 5em 2em;
  margin-bottom: 3em;
  color: white;

  h1{
    font-size: 5rem;
    font-weight: bold;
  }
  h2{
    font-size: 2rem;
    margin-top: 12px;
  }
`

const BtnGroup = styled.div`
  margin-top: 3em;
  text-align: center;
  color: black;
  a{
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    background-color: #ffffff;
    padding: 0.75em 1em;
    box-shadow: 0 4px gray;
    font-weight: 600;
    top: 0;
    position: relative;
  }
  a:nth-child(1){
    margin-right: 2em;
  }
  a:hover{
    top: 2px;
    box-shadow: 0 2px gray;

  }
`
const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
`
export default function ImgList({data}) {

  return (

    <>
    <Wrap>
        <Header>
          <h1>Lorem Picsum</h1>
          <h2>The Lorem Ipsum for photos.</h2>
          <BtnGroup>
            <a href="#">GitGub</a>
            <a href="#">Share</a>
          </BtnGroup>
        </Header>
      <Main>
        <ImgItem data={data}/>
      </Main>
    </Wrap>
    </>

  )
}
