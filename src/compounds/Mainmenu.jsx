import React, { useContext } from 'react'
 import { mycontext } from './helper/context'
 import './Quiz.css'
 const Mainmenu = () => {
    const {gamesstate,Setgame}=useContext(mycontext);
    const{name,setname}=useContext(mycontext);
    const{fill,setfill}=useContext(mycontext);
    const Name=(e)=>{
      setname(e.target.value);
      setfill(true)
    };

  return (
    <div className='main'>
            <h3 className='lable' >Enter your name:</h3>
            <input type="text"  onChange={Name} placeholder='Enter your name...' />
            {fill===true &&(
            <button onClick={()=>Setgame('quiz')}>Start Quiz</button>
            )}
    </div>
  )
}

export default Mainmenu