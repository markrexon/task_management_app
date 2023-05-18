import React, { useEffect, useState } from 'react'

const FormTodo = (props) => {
    const upons=props.updateon;
   const [todo,setTodo] =useState("");
   const [uo,setuo]=useState(false)
   const addHandler=(e)=>{
    const tododata={
        id:Math.random().toString(),
        todo:todo,
        completed:false,
    }
    props.onPassData(tododata)
   
   }
   useEffect(()=>{
    setuo(props.updateon);

},[upons]) 
console.log(uo)
  return (
    <div>
        {uo==true? 
        <>
        <input type="text" name="todo" onChange={(e)=>{setTodo(e.target.value)}}></input> 
        <input type="submit" onClick={addHandler} value="Submit" ></input><br/>
        </>
        :
<>
        <input type="text" name="todo" onChange={(e)=>{setTodo(e.target.value)}}></input> 
        <input type="submit" onClick={addHandler} value="Submit" ></input><br/>
        </>}
        
   
    </div>
  )
}

export default FormTodo