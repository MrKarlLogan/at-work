import { z } from "zod";

export const userEditSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(64, "Имя не может быть длиннее 64 символов"),
  username: z
    .string()
    .min(2, "Никнейм должен содержать минимум 2 символа")
    .max(64, "Никнейм не может быть длиннее 64 символов"),
  email: z.email("Введите корректный email адрес"),
  city: z
    .string()
    .min(2, "Город должен содержать минимум 2 символа")
    .max(64, "Название города не может быть длиннее 64 символов"),
  phone: z
    .string()
    .regex(/^\d+$/, "Телефон должен содержать только цифры")
    .min(5, "Телефон должен содержать минимум 5 цифр")
    .max(20, "Телефон не может содержать более 20 цифр"),
  companyName: z
    .string()
    .min(2, "Название компании должно содержать минимум 2 символа")
    .max(64, "Название компании не может быть длиннее 64 символов"),
});

export type UserEditFormData = z.infer<typeof userEditSchema>;

export type UserFormFields =
  | "name"
  | "username"
  | "email"
  | "city"
  | "phone"
  | "companyName";
