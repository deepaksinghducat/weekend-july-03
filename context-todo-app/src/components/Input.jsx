import React, { useContext } from "react";
import { useState } from "react";
import TodoContext from "../store/store";

function Input(props) {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState(false);

  const store = useContext(TodoContext);

  const addTodo = (event) => {
    event.preventDefault();

    if (todo.length > 0) {
      store.addTodo(todo);
      setTodo("");
    } else {
      setErr(true);
    }
  };

  return (
    <form className="row g-3 mt-4" onSubmit={addTodo}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            setErr(false);

            if (e.target.value.length === 0) {
              setErr(true);
            }
          }}
        />
        {err && <p className="text-danger">Please Enter the Valid Todo</p>}
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default Input;
