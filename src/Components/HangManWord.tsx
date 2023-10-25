type guessedLettersProps={
    guessedLetters:string[]
    word:string
    loss?:boolean
}
export function HangmanWord ({guessedLetters,word,loss=false}:guessedLettersProps) {
    return (
        <div style={{display:"flex",gap:"0.25em",fontSize:"4rem",
        fontWeight:"bold",textTransform:"uppercase",fontFamily:"monospace"}}>
            {word.split("").map((letter:string,index:number)=>(
                <span style={{borderBottom:".1em solid black"}} key={index}>
                    <span style={{visibility:guessedLetters.includes(letter)||loss ?"visible": "hidden",
                    color:!guessedLetters.includes(letter)&&loss ? "red":"black"
                }}>
                    {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}