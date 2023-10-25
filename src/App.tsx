import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import { HngmanDrowing } from './Components/HangeManDrowing';
import { HangmanWord } from './Components/HangManWord';
import { Keyboard } from './Components/Keypord';

function App() {
  function getWord(){
    return words[Math.floor(Math.random() * words.length)]
  }
  const [wordToGuess,setWordToGuess]=useState<string> ( getWord() )
  const [guessedLetters,setGuessedLetters]=useState<string[]>([])
  console.log(wordToGuess)
  const inCorrectLetters=guessedLetters.filter(l=>!wordToGuess.includes(l))
  
  
  const loss=inCorrectLetters.length>=6
  const win=wordToGuess.split("").every(letter=>guessedLetters.includes(letter))

  const AddGuessLetter= useCallback((letter:string)=>{
    if(guessedLetters.includes(letter) || loss || win)return
    setGuessedLetters(current=>[...current,letter])
  },[guessedLetters])

  
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{
      const key=e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      AddGuessLetter(key)
    }
    document.addEventListener("keypress",handler)
    return()=>{
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters])
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{
      const key=e.key
      if(key!=="Enter")return
      e.preventDefault()
      setWordToGuess(getWord())
      setGuessedLetters([])
    }

    document.addEventListener("keypress",handler)
    return()=>{
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters])
  return (
    <div style={{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"1.5rem",
      margin:"0 auto",
      alignItems:"center"
    }}>
      <div style={{fontSize:"2rem",textAlign:"center"}}>
        {win && "Winner 🥳 -Refresh to try again"}
        {loss && "Nice Try 😉 -Refresh to try again"}
        Lose Win</div>
      <HngmanDrowing numberOfGuesses={inCorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} loss={loss}/>
      <div style={{alignSelf:"stretch",margin:"10px"}}>
        <Keyboard 
        disabled={win||loss}
        activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
        inactiveLetters={inCorrectLetters}
        addGuessedLetter={AddGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
