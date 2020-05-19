import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
    
    const [words, setWords] = useState('')
    const [timeRemaining, setTimeRemaining]  = useState(5)

    const [clockStart, setClockStart] = useState(false)
    
    function handleChange(e)  {
      e.preventDefault()
      const {value} = e.target
      setWords(value)
    }

    function wordCount(str) {
      const wordsArr = str.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    


    
      useEffect(() => {
        if(clockStart && timeRemaining > 0) {
          setTimeout(() => {
            setTimeRemaining(time => time === 0 ? 0 : time -1)
          }, 1000)
        } else if (timeRemaining === 0) {
          setClockStart(false)
        }
       
      }, [timeRemaining, clockStart])



      console.log(clockStart)



      

 
   

    
    

  


    
    
   

  return (
    <div className="App">
     <h1>Speed Typer 88</h1>
     <textarea 
     onChange={handleChange}
     value={words}
     />
     <h4>Time remaining: {timeRemaining} </h4>
     <button onClick={() => setClockStart(true)}>Start</button>
     <h1>Word Count</h1>
  
    </div>
  );
}

export default App;
