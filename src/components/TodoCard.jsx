import React from "react";

const TodoCard = (props) => {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="main-card">
      <div className="todo-card">
        <p>{todo.input}</p>
        <div>
          <button onClick={()=> {
            handleCompleteTodo(todoIndex)
          }} className="done-btn" disabled={todo.complete}>
            Done
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteTodo(todoIndex)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
