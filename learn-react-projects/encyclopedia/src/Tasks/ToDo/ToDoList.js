import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (e) => {
    setTodos(todos.filter((item, index) => index !== parseInt(e.target.id)));
  };

  const checkboxHandler = (e) => {
    setTodos(
      todos.map((item, index) =>
        index === parseInt(e.target.id)
          ? { text: item.text, complete: e.target.checked }
          : { text: item.text, complete: item.complete }
      )
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button
            className="btn btn-primary"
            style={{ marginLeft: "10px", width: "150px" }}
          >
            Add
          </button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italics"];
        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (
          <div key={i}>
            <input
              onChange={checkboxHandler}
              checked={todo.complete}
              type="checkbox"
              id={i}
            />
            <h1 className={todoClasses.join(" ")}>{todo.text} </h1>
            {todos.complete ? (
              <span className={"style"}>{todos.text}</span>
            ) : (
              <span>{todos.text}</span>
            )}
            <button
              className="btn btn-primary"
              onClick={handleTodoDelete}
              id={i}
              style={{ marginLeft: "10px", width: "150px" }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;