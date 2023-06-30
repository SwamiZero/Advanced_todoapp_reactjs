import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState(" ");
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };

  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };

  const addToCompleted = (id) =>{
    const item = inprogress.find(x=>x.id===id);
    setCompleted([item, ...completed])
    const filterarray = inprogress.filter(x=>x.id!==id)
    setInprogress(filterarray)
  }
  useEffect(() => {}, [todos, inprogress]);

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">To-Do List</h3>


        
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Task"
            name="text"
          />
          <button type="button" onClick={() => addTodo()} className="btn">
            <FaPlusCircle className="icon" />
          </button>
        </form>

        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todos_title"> Task List </h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToProgress(item.id)}
                  className="icon-check-todo"
                />
                <FaTrash
                  onClick={() => deleteTodo(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>

          <div className="todos_list">
            <h3 className="todos_title"> In-Progress </h3>

            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.text}</p>
                <FaCheck onClick={() => addToCompleted(item.id)} className="icon-progress-todo" />
              </div>
            ))}
          </div>

          <div className="todos_list">
            <h3 className="todos_title"> Completed </h3>
            {completed.map((item,index) =>
            <div className="completed_card" key={item.id}>
              <p className="card_text">{item.text}</p>
            </div>
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
