import React, { useContext, useState } from 'react'
import { mycontext } from './helper/context';
import { mcqQuestions } from './helper/QuestionBank';
const Quiz = () => {
    const {point,Setpoint}=useContext(mycontext)
    const {gamesstate,Setgame}=useContext(mycontext);
    const[currentquestion,setcurrentquestion]=useState(0)
    const handle=(p)=>{
      mcqQuestions[currentquestion].answer===p?Setpoint((point)=>point+1):
      Setpoint(point)
      setcurrentquestion(currentquestion+1)
    }
  return (
    <div className='main'>
      {currentquestion<mcqQuestions.length?(
        <>
      <h1 className='question'>{mcqQuestions[currentquestion].question}</h1>
      <div className="options">
        {mcqQuestions[currentquestion].options.map((m)=><button  id="k" value={m} onClick={(e)=>handle(e.target.value)} key={mcqQuestions[currentquestion]}>{m}</button>)}
      </div>
      <button onClick={()=>setcurrentquestion(currentquestion+1)}>Next question</button>
      </>
    ):(alert(`mcq test is finshed `))}
    
    <button onClick={()=>Setgame((gamesstate)=>gamesstate='endgame')}>finish</button>
    </div>
  )
}

export default Quiz