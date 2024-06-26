import { z } from "zod";

export const formSignUpSchema = z.object({
  email: z.string().email("Email Required"),
  password: z.string().min(6, "Password min 6 character"),
  name: z.string().min(1, "Name is required"),
  phone_number: z
    .string()
    .min(10, "Minimal 10 character")
    .max(13, "Maksimal 13 character"),
});

export type SignInSchema = z.infer<typeof formSignUpSchema>;
