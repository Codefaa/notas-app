import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Se requiere usuario",
  }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "El email no es válido",
    }),
  password: z
    .string({
      required_error: "Se requiere contraseña",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
