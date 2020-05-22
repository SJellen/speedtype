import {useState, useEffect, useRef} from 'react'

localStorage.getItem('myData');

 function useLogic() {
    const START_TIME = 10
    const [stopButton, setStopButton] = useState(false)
    const [words, setWords] = useState('')
    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)
    const [endWordCount, setEndWordCount] = useState(0)
    const inputRef = useRef(null)
    const [button, setButton] = useState("Start")
    const [highScore, setHighScore] = useState(localStorage.getItem('myData'))





// localStorage.setItem('myData', highScore);
 

// localStorage.getItem('myData');
    
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
      setButton("TYPE!!")
    }

    function endGame() {
      setClockStart(false)
      setEndWordCount(wordCount(words))
      setStopButton(false)
      setButton("Start")
      if (endWordCount > highScore) {
        setHighScore(endWordCount)
        
      }
    }

    


    
      useEffect(() => {
        if(clockStart && timeRemaining > 0) {
          setTimeout(() => {
            setTimeRemaining(time => time === 0 ? 0 : time -1)
          }, 1000)
        } else if (timeRemaining === 0) {
          endGame()
          localStorage.setItem('myData', highScore);
        }

       
      }, [timeRemaining, clockStart, highScore])

      return {handleChange, words, stopButton, inputRef, timeRemaining, startButton, endWordCount, button, highScore}
}


export default useLogic