import {useState, useEffect, useRef} from 'react'



 function useLogic() {
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

      return {handleChange, words, stopButton, inputRef, timeRemaining, startButton, endWordCount}
}


export default useLogic