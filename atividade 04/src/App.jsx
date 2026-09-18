import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer atividade de Web II", concluida: false },
    { id: 3, titulo: "Estudar JavaScript", concluida: false },
    { id: 4, titulo: "Revisar Hooks e Props", concluida: true },
  ]);

  const handleToggle = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
      )
    );
  };

  const handleDelete = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  const pendentes = total - concluidas;

  return (
    <div>
      <Header />
      {pendentes > 0 ? (
        <p><strong>Você ainda possui tarefas pendentes.</strong></p>
      ) : (
        <p><strong>Parabéns! Todas as tarefas foram concluídas!</strong></p>
      )}

      <TaskSummary
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
      />

      <TaskList
        tarefas={tarefas}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
