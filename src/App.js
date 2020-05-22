import React from 'react';
import useLogic from './useLogic'
import './App.css';
import "nes.css/css/nes.min.css";

function App() {

  const {handleChange, words, stopButton, inputRef, timeRemaining, startButton, endWordCount, button, highScore} = useLogic()
   
  return (
   
       <div className="App nes-container is-dark with-title">
            <h1 className="speed ">Speed Typer `85</h1>

            <h4>How fast can you type?</h4>
            
                <textarea 
                  
                  onChange={handleChange}
                  value={words}
                  disabled={!stopButton} 
                  ref={inputRef}
                />
            <h4>Time remaining: {timeRemaining} </h4>
                <button 
                    type="button"
                    className="nes-btn is-primary"
                    disabled={stopButton} 
                    onClick={startButton}>{button}
                </button>
            <h1 className="wordCount">Word Count {endWordCount}</h1>
            <i class="nes-icon trophy is-large"></i>
            <h1 className="highScore nes-text is-success">High Score {highScore}</h1>
      
        </div>
  
       
  );
}

export default App;
