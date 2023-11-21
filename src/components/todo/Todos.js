import React from 'react'
import TodoItem from './TodoItem'

const todos = ({todos}) => (
<ul>
    {todos.map((todo, index) => (
    <TodoItem todo ={todo} key={index}/>
    ))}
  </ul>
  );
    


export default todos
