import React, { useState } from 'react'


const EditTodoForm = ({editTodo, task}) => {
  const[value, setvalue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id)
    setvalue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value = {value} placeholder='Update the task' onChange={(e) =>setvalue(e.target.value)}/>
      <button type='submit' className='Todo-btn'>Update Task</button>
    </form> 
  )
}

export default EditTodoForm
