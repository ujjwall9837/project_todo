import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
      style={{ display: "flex", fontSize: "16px" }}
    >
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
        value={text}
      ></input>
      <button
        style={{
          display: "flex",
          fontSize: "16px",
          width: "110px",
          marginBottom: "2px",
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
