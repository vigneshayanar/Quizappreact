import React, { useContext } from 'react'
import { mycontext } from './helper/context'
import './Quiz.css'
import { mcqQuestions } from './helper/QuestionBank'
const Endmenu = () => {
    const {gamesstate,Setgame}=useContext(mycontext)
    const {point,Setpoint}=useContext(mycontext)
    const{name,setname}=useContext(mycontext)
    const{fill,setfill}=useContext(mycontext);
      setfill(false)
  return (
    <div className='main'>
      <h1>Quiz finshed</h1>
      <h3>
        Hi {name} you have scored
      {point}/{mcqQuestions.length}
      </h3>
        <button onClick={()=>Setgame("menu")}>Restart quiz</button>
    </div>
  )
}

export default Endmenu