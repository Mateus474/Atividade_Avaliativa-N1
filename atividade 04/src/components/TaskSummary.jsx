
const TaskSummary = ({ total, concluidas, pendentes }) => {
  return (
    <div>
        <h3>Resumo</h3>
        <p>Total: {total}</p>
        <p>Concluídas: {concluidas}</p>
        <p>Pendentes: {pendentes}</p>
    </div>
    
  )
}

export default TaskSummary
