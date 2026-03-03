import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const clickhandler = () => {
    setTasks([...tasks, value]);
    setValue("");
  }
  const handlechange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <h1> Add task </h1> 
      <div className="inputbox">
        <input type="text" placeholder="Enter your task here" onChange={handlechange} value={value} />
        <h1 className="addtask" onClick={clickhandler}> + </h1>
      </div>
      <div className="tasklist">
        <h2> Your Tasks </h2>
        <ul>
          {
            tasks.map((task, index) => (
              
                <li key={index}> {task} </li>
              
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
