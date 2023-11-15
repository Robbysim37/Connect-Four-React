import './App.css';
import { useState } from 'react';
import Board from './components/Board';

function App() {

  const [winText,setWinText] = useState("")
  const [resetBoard,setResetBoard] = useState(false)

  const resetButton = (e) => {
    setResetBoard(true)
  }

  return (
    <div className="App">
      <div className='top'>
        {winText && <p className='winText'>{winText}</p>}
      </div>
      <Board setWinText={setWinText} resetBoard={resetBoard} setResetBoard={setResetBoard}/>
      <div className='bottom'>
        {winText && <button className='playAgain' onClick={resetButton}>Play again!</button>}
      </div>
    </div>
  );
}

export default App;
