 
import { useState } from 'react';
import './App.css';
import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';
import { Objects } from './components/Objects';

function App() {
  const [todolist,setTodolist]=useState([]);
  const[updateflag,setupdateFlag]=useState(false);
  const onDataFromForm=(data)=>{
   setTodolist([...todolist,data]);
   console.log(data)

    }
    const deleteHandler=(id)=>{
      const del=todolist.filter(todo=>todo.id!==id)
      setTodolist(del)
    }
    function updating(arr,id,updatingObj){
      const index=arr.findIndex(obj=>obj.id===id);
      if(index==-1){
        arr[index]={...arr[index],...updatingObj};
      }
      else{
        console.log("not found");
      }
      return arr;
    }
    const updateHandler=(id)=>{
      setupdateFlag(true);
      const todoup=todolist.find(todo=>todo.id==id)
      const update =updating(todolist,todoup.id,todoup);
setTodolist(update);   
     
      setupdateFlag(true);
    }
   
  return (
    <div className="App">
      {/* <FormTodo updateon={updateflag} onPassData={onDataFromForm}/>
      <ListTodo up={updateHandler} del={deleteHandler} passtoList={todolist}/> */}
      <Objects/>
      
    </div>
  );
}

export default App;
