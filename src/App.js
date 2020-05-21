import React from 'react';
import useLogic from './useLogic'
import './App.css';

function App() {

  const {handleChange, words, stopButton, inputRef, timeRemaining, startButton, endWordCount} = useLogic()
   
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
