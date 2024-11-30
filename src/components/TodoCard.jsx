import React, { useState } from 'react';

function TodoCard(props) {
  const { todo, todoIndex, completeTodo, deleteTodo, updateTodo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.input);

  return (
    <div className="card todo-item">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <p>{todo.input}</p>
      )}
      <div className="todo-buttons">
        {!isEditing ? (
          <>
            <button
              disabled={todo.complete}
              onClick={() => completeTodo(todoIndex)}
            >
              <h4>Done</h4>
            </button>
            <button onClick={() => deleteTodo(todoIndex)}>
              <h4>Delete</h4>
            </button>
            <button onClick={() => setIsEditing(true)}>
              <h4>Update</h4>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                updateTodo(todoIndex, updatedText);
                setIsEditing(false);
              }}
            >
              <h4>Save</h4>
            </button>
            <button onClick={() => setIsEditing(false)}>
              <h4>Cancel</h4>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoCard;
        
