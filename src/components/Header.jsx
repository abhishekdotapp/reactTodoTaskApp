import React from 'react'

function Header(props) {
  const {todos} = props

  return (
    <header>
        <h1 className="text-gradient">Your Task List </h1>
    </header>
  )
}

export default Header