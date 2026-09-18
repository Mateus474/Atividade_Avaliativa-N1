import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tarefas, onToggle, onDelete }) => {
  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <TaskItem
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            concluida={tarefa.concluida}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
