import React, { useState } from 'react'

const AddTodo = ({addTodoHandler}) => {
    const [todoTitle , setTodoTitle] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        addTodoHandler(todoTitle)
        setTodoTitle('')
    }

 

  return (
    <form onSubmit={(e) => submitTodo(e)}>
        <input 
        type='text'
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        />
      
    </form>
  )
}

export default AddTodo

