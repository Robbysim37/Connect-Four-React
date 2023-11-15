import React,{useState,useEffect} from 'react'
import BoardColumn from './BoardColumn'
import checkForWin from '../connectFourWinLogic'

export default function Board(props) {

    const clearColumn = ["clear","clear","clear","clear","clear","clear"]
    const clearBoard = [
        [...clearColumn],
        [...clearColumn],
        [...clearColumn],
        [...clearColumn],
        [...clearColumn],
        [...clearColumn],
        [...clearColumn]
    ]

    const {setWinText,setResetBoard} = props

    useEffect(()=> {
        setBoardState([...clearBoard])
        setWinText("")
        setResetBoard(false)
        setCurrPlayer("red")
        setIsWinner(false)
        setTurn(0)
        // eslint-disable-next-line
    },[props.resetBoard])

    const [turn,setTurn] = useState(0)
    const [currPlayer,setCurrPlayer] = useState("red")
    const [boardState,setBoardState] = useState([...clearBoard])
    const [isWinner,setIsWinner] = useState(false)

    const selectColumn = (e) => {
        const selectedColumn = parseInt(e.currentTarget.id)
        let selectedSlot = 0

        if(boardState[selectedColumn][0] !== "clear" ||
            isWinner){
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
        const winningColor = checkForWin(selectedColumn,selectedSlot,boardState,currPlayer)
        if(winningColor){
            props.setWinText(winningColor)
            setIsWinner(true)
        }
        setTurn(turn + 1)
        if(turn === 41 && !winningColor){
            props.setWinText("Tie!")
            setIsWinner(true)
        }
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
