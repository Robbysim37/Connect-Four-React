import './App.css';
import { useState } from 'react';
import Board from './components/Board';

function App() {

  const [winText,setWinText] = useState("")
  const [resetBoard,setResetBoard] = useState(false)
  const [currTurn,setCurrTurn] = useState("Red")
  const [isWinner,setIsWinner] = useState(false)

  const resetButton = (e) => {
    setResetBoard(true)
  }

  return (
    <div className="App">
      <div className='top'>
        <h1>Connect Four</h1>
        {!isWinner && <p>{currTurn}'s turn</p>}
        {winText && <p className='winText'>{winText}</p>}
      </div>
      <Board setWinText={setWinText} resetBoard={resetBoard} setResetBoard={setResetBoard} 
      setCurrTurn={setCurrTurn} isWinner={isWinner} setIsWinner={setIsWinner}/>
      <div className='bottom'>
        {winText && <button className='playAgain' onClick={resetButton}>Play again!</button>}
      </div>
    </div>
  );
}

export default App;
