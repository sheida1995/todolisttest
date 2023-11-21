import React, { useState } from 'react'
import "./App.css";
import TodoHeader from './components/todo/TodoHeader';
import AddTodo from './components/todo/AddTodo';
import Todos from "./components/todo/Todos";


const App = () => {
  const[todos , setTodos] = useState ([]);

  const addTodoHandler = (todoTitle) => {
    console.log(todoTitle)
    
    const newTodos = [...todos];
    newTodos.push(todoTitle);
    setTodos(newTodos);
    
  };
  return (
  
    <>
      <TodoHeader todoTitle={"this is kkk"}/>
    <AddTodo addTodoHandler = {addTodoHandler}/>
   <Todos todos= {todos} />
    </>
  );
}

export default App

