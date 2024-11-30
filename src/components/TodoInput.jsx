import React from 'react'

function TodoInput(props) {
  const {handleAddTodo} = props
  const [input, setInput] = React.useState('')
  return (
    <div className="todo-container">
      <input value={input} onChange={((e) => { 
        setInput(e.target.value)
      })} placeholder="Add Task" />
      <button onClick={() =>{
        if(!input){ return}
        handleAddTodo(input)
        setInput("")
      }}>
        
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput