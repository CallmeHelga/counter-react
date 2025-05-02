import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [plusCount, setPlusCount] = useState(0);
  const [minusCount, setMinusCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);


  function handleAdd() {
    setCounter(counter + 1);
    setHistory(prev => [...prev, "Increased by 1"]);
    setPlusCount(plusCount + 1)
  }

  function handleSubtract() {
    setCounter(counter - 1);
    setHistory(prev => [...prev, "Diminished by 1"]);
    setMinusCount(minusCount + 1);
  }

  function handleReset() {
    setCounter(0);
    setHistory(prev => [...prev, "Reset"]);
    setResetCount(resetCount + 1)
  }


  return (
    <div className="container">

      {/* History */}
      <div className="sides">
        <h2>History</h2>
        <div className="history-container">
          <ol>
            {(isExpanded ? history : history.slice(-10)).map((e) => {
              return (
                e === "Increased by 1" ?
                  <li className="green">{e}</li> :
                  e === "Diminished by 1" ?
                    <li className="red">{e}</li> :
                    <li>{e}</li>
              )
            })}
          </ol>
        </div>
        {history.length > 0 && (
          <button
            aria-label={isExpanded ? "Hide full history" : "Show full history"}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Hide history" : "Show all"}
          </button>
        )}
      </div>

      {/* Counter */}
      <div className="counter">
        <div className="text">
          <h1>{counter}</h1>
        </div>
        <div>
          <button aria-label="Decrease counter by one"
            className="buttonMinus"
            onClick={handleSubtract}>
            - Minus
          </button>
          <button aria-label="Increase counter by one"
            className="buttonPlus"
            onClick={handleAdd}>
            Plus +
          </button>

          <div >
            <button aria-label="Reset counter to zero"
              className="resetButton"
              onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="sides">
        <h2>Total:</h2>
        <p>Plus: {plusCount}</p>
        <p>Minus: {minusCount}</p>
        <p>Reset: {resetCount}</p>
      </div>
    </div >
  )
}

export default App
