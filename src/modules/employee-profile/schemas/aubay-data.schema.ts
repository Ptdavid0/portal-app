import { z } from "zod";

export const aubayDataSchema = z.object({
  category: z.enum(["Colaborador Permanente", "Consultor", "Gestor"]),
  functionalArea: z.enum([
    "Desenvolvimento de Software",
    "Infraestrutura",
    "Análise de Negócio",
    "Quality Assurance",
  ]),
  experienceLevel: z.enum(["Júnior", "Pleno", "Sênior", "Especialista"]),
});

export type AubayDataFormValues = z.infer<typeof aubayDataSchema>;

