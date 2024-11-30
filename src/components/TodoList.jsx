import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
  const {todos,tab, completeTodo} = props
  
  const filterTodoList = tab === 'All'?
  todos:
  tab === 'Completed' ?
  todos.filter(val => val.complete):
  todos.filter(val => !val.complete)
  
  return (
    <>
    {
      filterTodoList.map((todo,todoIndex) =>{
         return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} {...props}/>
         )
      })
    }
    </>
  )
}

export default TodoList