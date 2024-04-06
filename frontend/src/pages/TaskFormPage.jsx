import './TaskFormPage.css';
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import { mensaje } from '../function/mensajeToastify';
dayjs.extend(utc);


export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const { register, setValue, handleSubmit, formState: { errors }, } = useForm();
 
  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <Card>
      <form className="taskform-form" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          name="title"
          placeholder="Título"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p>Por favor introduce un título.</p>
        )}

        <Label htmlFor="description">Descripción</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Descripción"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Fecha</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button onClick={() => mensaje('✍ Nota agregada')} color='#5195FF'>Guardar</Button>
        <Link to='/tasks'><ToastContainer /></Link>
      </form>
    </Card>
  );
}
