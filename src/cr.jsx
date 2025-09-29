import React, { useState } from "react";
import car from "./assets/pixels.jpeg";

function Card() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function pushing() {
    setTasks([...tasks, task]);
    setTask(""); 
  }

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={pushing}>Add Task</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
