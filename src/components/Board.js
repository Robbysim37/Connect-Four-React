import React,{useState} from 'react'
import BoardColumn from './BoardColumn'

export default function Board() {

    const [currPlayer,setCurrPlayer] = useState("red")
    const [boardState,setBoardState] = useState(
        [
            ["clear","clear","clear","clear","clear","red"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"]
        ]
    )

    const placePiece = (column,i) => {
        if(column[i+1] !== "clear"){
            console.log(column[i])
            column[i] = currPlayer
            setCurrPlayer(currPlayer === "red" ? "yellow" : "red")
            return column
        }
        placePiece(column,i+1)
    }

    const selectColumn = (e) => {
        const selectedColumn = e.currentTarget.id
        const newBoardState = [...boardState]

        console.log(newBoardState[selectedColumn][0])
        newBoardState[selectedColumn][0] = currPlayer
        console.log(newBoardState[selectedColumn][0])
        // const newColumnState = placePiece(...newBoardState[selectedColumn],0)
        // newBoardState[selectedColumn] = newColumnState
        // setBoardState(newBoardState)
    }

  return (
    <div className='board'>
        {
            boardState.map((currColumn,i) => {
                return <BoardColumn column={currColumn} id={i}
                selectColumn={selectColumn}key={Math.random()}/>
            })
        }
    </div>
  )
}
