

import React,{useState} from 'react'



export default function Resume({hello , name , hobby , food , color}) {

  const [like ,  setLike] = useState(0);
  const [text , setText] = useState('좋아요를 눌러주세요');
  function clickLike(){
    setLike((like)=>(like + 1));
    setText('');
  }

  return (
    <div style={{ border: "solid 1px green", width: "100%" }}>
      <h1>{name}자기소개</h1>
      <h2>{hello}</h2>
      <p>취미 : {hobby}</p>
      <p>좋아하는 음식 : {food}</p>
      <p>좋아하는 색 :<span style={{color}}> {color} </span> </p>
      <button onClick={clickLike}>좋아요 :{like}</button>
      <span> {text}</span>
    </div>
  )
}

