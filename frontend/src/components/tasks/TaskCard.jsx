import './TaskCard.css';
import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import { ToastContainer } from 'react-toastify';
import { mensaje } from '../../function/mensajeToastify';

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  function handleDeleteClick() {
    mensaje('❌ Nota eliminada');
    deleteTask(task._id);
  }

  return (
    <Card>
      <header>
        <h1>{task.title}</h1>

      </header>
      <p>{task.description}</p>
      {/* format date */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("es-AR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
      <div className="taskcard-crud">
        <Button onClick={handleDeleteClick} color='red'>Eliminar</Button>
        <ToastContainer/>  
        <ButtonLink to={`/tasks/${task._id}`}><Button color='#5195FF'>Editar</Button></ButtonLink>
      </div>
    </Card>
  );
}
