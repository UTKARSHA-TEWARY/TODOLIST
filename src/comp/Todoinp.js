import React,{useState}from 'react'

function Todoinp(props){
    const [Inputtext,setInputtext]=useState(" ");
    return(
        <div className="input">
            <input type="text" className="inp" placeholder="Enter your task" value={Inputtext} onChange={e=>{
                setInputtext(e.target.value)
            }
            }></input>
            <button className='add-btn' placeholder="Enter your task" onClick={()=>{
                props.addList(Inputtext) 
                setInputtext(" ")
            }}>Add Task</button>
            
        </div>
    )
    
    
}

export default Todoinp;