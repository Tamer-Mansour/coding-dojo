import React, { useState } from "react";
import "./App.css";

function App() {
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
  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        const updatedTodo = { ...todo, complete: !todo.complete };
        return updatedTodo;
      }
      return todo;
    });
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
          <button>Add</button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <input
              onChange={(event) => {
                handleToggleComplete(i);
              }}
              checked={todo.complete}
              type="checkbox"
            />
            <span>{todo.text} </span>
            <button
              onClick={handleTodoDelete}
              id={i}
              style={{ marginLeft: "10px" }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
