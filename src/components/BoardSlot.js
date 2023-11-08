import React from 'react'
import "./playArea.css"

export default function BoardSlot(props) {
  return (
    <div className='outline'>
        <div className={`content ${props.color}`}></div>
    </div>
  )
}
