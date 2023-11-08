import React from 'react'
import BoardSlot from './BoardSlot'

export default function BoardColumn(props) {
  return (
    <div onClick={props.selectColumn} id={props.id}>
        {
            props.column.map(currSlot => {
                return <BoardSlot color={currSlot} id={'test'} key={Math.random()}/>
            })
        }
    </div>
  )
}
