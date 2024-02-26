import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';


interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

