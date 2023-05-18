import React, { useEffect, useState } from 'react'
import records from "./data";

export const Objects = () => {
    const [obj,setObj]=useState([]);
useEffect(()=>{
    setObj(records);
})
console.log(obj )
return (
    <div>
    {obj.map(record => {
      const key = Object.keys(record)[0];
      const tasks = record[key];

      return (<>
        <h2>{key}</h2>
        <div key={key}>
          {tasks.map(task => (
            <div key={task.id}>
               
              <span >Todo: {task.todo}</span>
              <span>Priority: {task.priority}</span>
            </div>
          ))}
        </div>
        </>
      );
    })}
  </div>
  )
}
