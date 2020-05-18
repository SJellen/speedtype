import React, { useState } from 'react';

import './App.css';

function App() {
    
    const [words, setWords] = useState('')

    
    function handleChange(e)  {
      e.preventDefault()
      const {value} = e.target
      setWords(value)
    }
       
    
    console.log(words)

  return (
    <div className="App">
     <h1>Speed Typer 88</h1>
     <textarea 
     onChange={handleChange}
     value={words}
     />
     <h4>Time remaining: </h4>
     <button>Start</button>
     <h1>Word Count</h1>
  
    </div>
  );
}

export default App;
