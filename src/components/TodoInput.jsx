import React from "react";
import { useState } from "react";
const TodoInput = (props) => {

  const [inputValue, setInputValue] = useState("");
  const { handleAddTodo } = props;


  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add Task"
      />
      <button
      

        className="add-btn"
        onClick={() => {
          if(!inputValue){return}  //this is a guard clause
          handleAddTodo(inputValue);
          setInputValue('')
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
