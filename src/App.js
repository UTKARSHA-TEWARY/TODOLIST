import './App.css';
import img from './todopic.jpg'
import React,{useState}from 'react'
import Todolist from './comp/Todolist'
function App() {
   const [List,setList]=useState([]);
   const [Inputtext,setInputtext]=useState(" ");
   const [toggle,settoggle]=useState(true)
   const [edit,setedit]=useState(null)
   
   let addList =(Inputtext)=>
   {
    
    if(Inputtext==" "){
      alert("no data entered");
    }
    else if(Inputtext && toggle==false)
    {
      
      const add=List.filter((item,i)=>{
        if( i!=edit ){
         return item; 
        }
      });
      setList([...add,Inputtext])
         

        
      
        

      
     
      settoggle(true)
      setInputtext(" ")
      
      
    }
    else {
    setList([...List,Inputtext]);
    }
  }

  let deleteitem=((index)=>{
    const alldata=[...List];
   alldata.splice(index,1)
   setList([...alldata])
    })
  const update=(idx,msg)=>{
    setInputtext(msg)
    settoggle(false);
    setedit(idx)

   

    
    
    
    

    
  }
    
  
  return (
   

<div className="Main" >
  <div className="centre"  >
    <div class="combo">
    <img src={img} height={50} width={50}></img>
    <div className='todo'> Todo List..</div>
   
    </div>
    <input type="text" className="inp" placeholder="Enter your task" value={Inputtext} onChange={e=>{
                setInputtext(e.target.value)
            }
            }></input>
          { toggle ? <button className='add-btn' placeholder="Enter your task" onClick={()=>{
              addList(Inputtext) 
              setInputtext(" ")
          }}>Add Task </button> 
          : <button className='add-btn' placeholder='edit'onClick={()=>{
             addList(Inputtext)
           
        }}>Edit</button>
        }
            
           
          {List.map((listitem,i)=>{
            return(
              <Todolist key={i} index={i} ke={i} list={listitem} del={deleteitem} edit={update} />
            )
          } 
          )
        }
        
         
      </div>
    </div>
  );
      
      
        
 }
export default App;
