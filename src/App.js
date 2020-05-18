import React, { useState } from 'react';

import './App.css';

function App() {
    
    const [words, setWords] = useState('')
    const [timeRemaining, setTimeRemaining]  = useState(5)
    
    function handleChange(e)  {
      e.preventDefault()
      const {value} = e.target
      setWords(value)
    }

    function wordCount(str) {
      const wordsArr = str.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

   
    
    
   

  return (
    <div className="App">
     <h1>Speed Typer 88</h1>
     <textarea 
     onChange={handleChange}
     value={words}
     />
     <h4>Time remaining: {timeRemaining} </h4>
     <button onClick={() => console.log(wordCount(words))}>Start</button>
     <h1>Word Count</h1>
  
    </div>
  );
}

export default App;
