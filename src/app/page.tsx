import React, { useState } from "react";
import "";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Chores ToDo List</h1>
      <div className="todo-list">
        {tasks.map((task, index) => (
          <div key={index} className={`task ${task.done ? "done" : ""}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>🗑️</button>
          </div>
        ))}
      </div>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <p>Done: {tasks.filter((task) => task.done).length}</p>
    </div>
  );
}

export default App;
