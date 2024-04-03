import './RegisterPage.css';

import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className='register-contenedor'>
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className='register-titulo'>Crear cuenta gratuita</h1>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Usuario:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Usuario"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p>{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            placeholder="Correo electronico"
            {...register("email")}
          />
          {errors.email?.message && (
            <p>{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          {errors.password?.message && (
            <p>{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirmar la contraseña:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder=" Confirmar la contraseña"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword?.message}</p>
          )}
          <Button>Regístrate</Button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </Card>
    </div>
  );
}

export default Register;
