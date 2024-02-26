import React, { useState } from 'react';

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName(''); // Limpa o campo após adicionar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTask;
