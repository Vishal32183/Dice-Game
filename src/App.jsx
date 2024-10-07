import { useState } from "react"
import StartGame from "./components/StartGame"
import Gameplay from "./components/Gameplay";

const App = () => {
  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev)
  }

  return (
    <main>
      <>
   {isGameStarted ?<Gameplay/>:<StartGame
   toggle={toggleGamePlay}/>}
   </>
    </main>
  )
}

export default App
