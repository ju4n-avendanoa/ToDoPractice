import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setTodo] = useState("");

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDo) return;
    setToDos((prev) => [...prev, toDo]);
    setTodo("");
  };

  const handleClick = (key) => {
    setToDos((prev) => prev.filter((_, index) => index !== key));
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={toDo} onChange={handleChange} />
          <button type="submit" className="add-btn">
            add new task
          </button>
        </form>
      </div>
      <div className="tasks">
        {toDos.length === 0 && <h2>Not ToDos</h2>}
        <ul>
          {toDos.map((toDo, index) => (
            <div key={index} className="list">
              <li>{toDo}</li>
              <button
                className="delete-btn"
                onClick={() => {
                  handleClick(index);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
