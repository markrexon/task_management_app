import React, { useEffect, useState } from 'react'

const ListTodo = ({passtoList,del,up}) => {
    const [todos,setTodos]=useState([])
    console.log(passtoList)
    const onUpdate=(id)=>{
        up(id)
    }
    const onDelete=(id)=>{
        del(id)
      
    }
    useEffect(()=>{
        if(passtoList!=[])
        setTodos(passtoList);
        else 
        setTodos([]);
    },[passtoList])
    console.log(todos)
  return (
    <div>
        {todos.map(list=>(
           <>
               <p key={list.id} style={{display:'inline-block',border:"2px solid black"}}>   
                {list.todo} 
                </p>
                <span>{list.complete ==true ? "completed" :"not completed"}</span>
                   <button style={{display:'inline-block'}}
                   onClick={()=>onUpdate(list.id)} >update</button>
                <button  onClick={()=>onDelete(list.id)}>delete</button>
               
                <br/>
            
            </>
            
        ))}
    </div>
  )
}

export default ListTodo