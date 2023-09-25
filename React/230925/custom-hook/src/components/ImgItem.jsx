import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';


const Article = styled.article`

  width: 300px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
  display: inline-block;
`
const Img = styled.img.attrs({ alt : 'picsum 이미지' })`
    width: 100%;
    aspect-ratio: 300/200;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`
const Desc = styled.div`
  padding: 24px 10px;

  h2{
    font-size: 1.2rem;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span{
    font-weight: bold;
  }
`



export default function ImgItem({data}) {


  return (
    <>
    {data.map((item)=>(
    <Article key={item.id}>
      <a href={item.url}>
          <Img src={item.download_url}/>
      </a>
          <Desc>
              <h2><span> Author</span> : {item.author}</h2>
          </Desc>
      
      </Article>
      ))}
      </>

  )
}


// async function fetchImages(){
//   const imgList = [];
//   await fetch(`https://picsum.photos/v2/list`)
//       .then((result)=>{
//           return result.json();
//       })
//       .then((list)=>{
//           imgList.push(list.slice(0, 0 + 10))
//       })
//       .catch((error)=>{
//         console.log('error: ', error);
//       })
//   return imgList;
// }