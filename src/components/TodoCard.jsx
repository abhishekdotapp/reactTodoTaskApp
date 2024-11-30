import React from 'react'

function TodoCard(props) {
  const {todo,todoIndex,completeTodo, deleteTodo} = props
  
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete} onClick={()=>{
          completeTodo(todoIndex)
        }}><h4>Done</h4></button>
        <button onClick={()=>{
          deleteTodo(todoIndex)
        }}><h4>Delete</h4></button>
      </div>
      
    </div>
  )
}

export default TodoCard