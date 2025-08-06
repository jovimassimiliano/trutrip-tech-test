import z from "zod";

export const FormValidationSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Invalid password"),
});
