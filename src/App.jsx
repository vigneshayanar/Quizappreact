import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quiz from './compounds/Quiz'
import Mainmenu from './compounds/Mainmenu';
import Endmenu from './compounds/Endmenu';
import './compounds/Quiz.css'
import { mycontext } from './compounds/helper/context';

function App() {
  const [gamesstate,Setgame]=useState("menu");
const[point,Setpoint]=useState(0)
const[name,setname]=useState("")
const[fill,setfill]=useState()

  return (
    <div className='one'>
      <h1>Quiz App</h1>
      <mycontext.Provider value={{gamesstate,Setgame,point,Setpoint,name,setname,fill,setfill}}>
          {gamesstate==="menu" && <Mainmenu/>}
          {gamesstate==="quiz" && <Quiz/>}
          {gamesstate==="endgame" && <Endmenu/>}
      </mycontext.Provider>
    </div>
 

  )
}

export default App
