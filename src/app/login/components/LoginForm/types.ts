import z from "zod";
import { FormValidationSchema } from "./validation";

export type FormValue = z.infer<typeof FormValidationSchema>;
