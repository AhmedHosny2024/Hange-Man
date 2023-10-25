import { HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG } from "./BodyParts"

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
  }
export function HngmanDrowing ({ numberOfGuesses }: HangmanDrawingProps) {
    return(
        <div style={{
            position:"relative",
            marginLeft:"70px"
            
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{height:"50px",width:"10px",background:"black",position:"absolute",top:0,right:0}}/>
            <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}}/>
            <div style={{height:"350px",width:"10px",background:"black",marginLeft:"120px"}}/>
            <div style={{height:"10px",width:"250px",background:"black"}}/>
        </div>
    )
}