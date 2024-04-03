import './TasksPage.css';

import { useEffect } from "react";
import { useTasks } from "../context/tasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ButtonLink } from '../components/ui';

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.length === 0 && (
        <div className='taskpage-vacio'>
            <h1>Aún no hay tareas, agregue una nueva tarea</h1>
            <ButtonLink to="/add-task">Agregar nota</ButtonLink>
        </div>
      )}

      <div className="task-contenedor">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </>
  );
}
