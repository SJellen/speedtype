import React, { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
    const START_TIME = 5
    const [stopButton, setStopButton] = useState(false)
    const [words, setWords] = useState('')
    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)
    const [endWordCount, setEndWordCount] = useState(0)
    const inputRef = useRef(null)
    
    function handleChange(e)  {
      e.preventDefault()
      const {value} = e.target
      setWords(value)
    }

    function wordCount(str) {
      const wordsArr = str.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    

    function startButton() {
      setClockStart(true)
      setEndWordCount(0)
      setTimeRemaining(START_TIME)
      setWords('') 
      setStopButton(true)
      inputRef.current.disabled = false
      inputRef.current.focus()
    }

    function endGame() {
      setClockStart(false)
      setEndWordCount(wordCount(words))
      setStopButton(false)
    }

    


    
      useEffect(() => {
        if(clockStart && timeRemaining > 0) {
          setTimeout(() => {
            setTimeRemaining(time => time === 0 ? 0 : time -1)
          }, 1000)
        } else if (timeRemaining === 0) {
          endGame()
        }

       
      }, [timeRemaining, clockStart])



      



      

  return (
        <div className="App">
            <h1>Speed Typer 88</h1>
                <textarea 
                  onChange={handleChange}
                  value={words}
                  disabled={!stopButton} 
                  ref={inputRef}
                />
            <h4>Time remaining: {timeRemaining} </h4>
                <button 
                    disabled={stopButton} 
                    onClick={startButton}>Start
                </button>
            <h1>Word Count {endWordCount}</h1>
      
        </div>
  );
}

export default App;
