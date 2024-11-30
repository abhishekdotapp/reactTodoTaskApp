import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  const [todos, setTodos] = useState([])

  const [selectedTab, setSelectedTab] = useState('Open')
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }
  function completeTodo(index) {
    const newTodoList = [...todos]
    newTodoList[index].complete = true
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }
  function deleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex) => valIndex !== index)
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }
  function handleSavedData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos })
    )
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList todos={todos} tab={selectedTab} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
