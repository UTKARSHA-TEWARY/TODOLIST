import React from 'react'

function Todolist(props){

  

  
    return(
      <li className='list'>
       {props.list} <div><button className='delete' onClick={()=>{props.del(props.index)

       }}
        >Remove</button ><button onClick={()=>{
          props.edit(props.ke,props.list)
        }} className="edit">Edit</button>
          </div>  </li>  )
}

export default Todolist;