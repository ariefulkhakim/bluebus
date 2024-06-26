import { z } from "zod";

export const formSignInSchema = z.object({
  email: z.string().email("Email Required"),
  password: z.string().min(6, "Password min 6 character"),
});

export type SignInSchema = z.infer<typeof formSignInSchema>;
