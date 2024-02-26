import React, { useState } from 'react';
import Header from './components/Header'; // Ajuste o caminho conforme necessário
import Main from './components/Main'; // Ajuste o caminho conforme necessário
import Footer from './components/Footer'; // Ajuste o caminho conforme necessário
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
    <div className="app-container"> {/* Pode adicionar estilos ou classes conforme necessário */}
    <Header />
    <Main>
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </Main>
    <Footer />
  </div>
  );
}

export default App;

