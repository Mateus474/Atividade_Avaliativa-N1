const TaskItem = ({ id, titulo, concluida, onToggle, onDelete }) => {
  return (
    <div>
      <div>{titulo}</div>
      <div>Status: {concluida ? "Concluída" : "Pendente"}</div>
      <div>
        {!concluida && (
          <button onClick={() => onToggle(id)}>Concluir</button>
        )}
        <button onClick={() => onDelete(id)}>Excluir</button>
      </div>
    </div>
  )
}

export default TaskItem
