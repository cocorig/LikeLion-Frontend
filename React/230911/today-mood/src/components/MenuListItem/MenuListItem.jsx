import React from 'react'
import './MenuListItem.css'
export default function MenuListItem({mood , setCurrentMood}) {

  // 버튼이 클릭되면 setCurrentMood에 mood를 담아 보낸다
  const onitemClick = ()=>{
      setCurrentMood(mood)
  }
  return (
    <li>
      <button onClick={onitemClick} className='btn-item'><span>{mood}</span></button>
    </li>
  )
}
