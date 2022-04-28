import React, {useEffect, useState} from 'react';
import { AddTodo } from './Components/AddTodo.js';
import Navbar  from './Components/Navbar.js';
import TODO from './Components/TODO.js';

function App() {

  let inittodo;
  if(localStorage.getItem("todo") === null)
  {
     inittodo = [];
  }
  else
  {
    inittodo = JSON.parse(localStorage.getItem("todo"));
  }
  const ondelete =(tod)=>
  {
    settodo(todo.filter((e) =>{
      return e!==tod;
    }));
    localStorage.setItem("todo",JSON.stringify(todo));
  }

const [todo,settodo] = useState(inittodo);
  
useEffect(() =>{localStorage.setItem("todo",JSON.stringify(todo))}, [todo]);   
  
  
  const addTodo =(title,desc)=>{
    let sno1;
    if(todo.length === 0)
    {
      sno1 = 1;
    }
    else
    {
      sno1 = todo[todo.length-1] + 1;
    }
     let todos = {
       sno:sno1,   
       title:title,
       desc:desc
     }
    settodo([...todo,todos]);
   }
  return (
    <>
    <Navbar/>
    <AddTodo addtodo = {addTodo}/>
    <TODO todos={todo} ondelete = {ondelete}/>
    </>
  );
}

export default App;
