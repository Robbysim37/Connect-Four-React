import React,{useState} from 'react'
import BoardColumn from './BoardColumn'
import checkForWin from '../connectFourWinLogic'

export default function Board() {

    const [currPlayer,setCurrPlayer] = useState("red")
    const [boardState,setBoardState] = useState(
        [
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"],
            ["clear","clear","clear","clear","clear","clear"]
        ]
    )

    const selectColumn = (e) => {
        const selectedColumn = parseInt(e.currentTarget.id)
        let selectedSlot = 0

        if(boardState[selectedColumn][0] !== "clear"){
            return
        }

        const boardCopy = [...boardState]
        let placementNotFound = true
        let i = 0
        while(placementNotFound){
            if(boardCopy[selectedColumn][i + 1] !== "clear"){
                boardCopy[selectedColumn][i] = currPlayer
                setCurrPlayer(currPlayer === "red" ? "yellow" : "red")
                selectedSlot = i
                placementNotFound = false
            }
            i++
        }
        setBoardState(boardCopy)
        checkForWin(selectedColumn,selectedSlot,boardState,currPlayer)
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
