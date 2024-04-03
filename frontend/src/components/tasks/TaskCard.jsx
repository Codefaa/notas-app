import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import './TaskCard.css';

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

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
        <Button onClick={() => deleteTask(task._id)} color='red'>Eliminar</Button>
        <ButtonLink to={`/tasks/${task._id}`}><Button color='#5195FF'>Editar</Button></ButtonLink>
      </div>
    </Card>
  );
}
