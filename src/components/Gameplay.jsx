import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"


const Gameplay = () => {
  const[score,setScore]=useState(0);
  const[seleNum,setSeleNum]=useState();
  const[currentDice,setCurrentDice]=useState(1);
  const[error,setEror]=useState("")
  const[showRules,setShowRules]=useState(false)
  const generateRaandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min)
  }
  const roleDice=()=>{
    if(!seleNum) {
      setEror('you have not selected any number')
      return;
    }
  
    const randomNumber=generateRaandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    if(seleNum===randomNumber){
      setScore((prev)=>prev+randomNumber)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSeleNum(undefined)
  }
  const resetScore=()=>{
    setScore(0)
  }

  return (
   <MainContainer>
   <div className="top-section">
   <TotalScore score={score}/>
   <NumberSelector
   seleNum={seleNum}
   setSeleNum={setSeleNum}
   error={error}
   setEror={setEror}
   />
   </div>
   <RollDice
   currentDice={currentDice}
   roleDice={roleDice}
   />
    <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
  { showRules && <Rules/>}
   </MainContainer>
  )
}

export default Gameplay

const MainContainer=styled.main`
padding-top:70px;
    .top-section{
       display: flex;
       justify-content: space-around;
       align-items: end;
    }
    .btn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 40px;
      
    }
`