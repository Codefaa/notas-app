import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce un email válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Se requiere usuario",
      })
      .min(3, {
        message: "El usuario debe tener al menos 3 caracteres.",
      }),
    email: z.string().email({
      message: "Por favor, introduce un email válido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
