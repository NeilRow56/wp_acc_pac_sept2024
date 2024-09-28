import { z } from "zod";

export const CreatePlanningSchema = z.object({
  taxOne: z.string().optional().nullable(),
  taxOneCompleted: z.boolean().optional(),
  taxTwo: z.string().optional().nullable(),
  taxTwoCompleted: z.boolean().optional(),
  taxThree: z.string().optional().nullable(),
  taxThreeCompleted: z.boolean().optional(),
  taxFour: z.string().optional().nullable(),
  taxFourCompleted: z.boolean().optional(),
  taxFive: z.string().optional().nullable(),
  taxFiveCompleted: z.boolean().optional(),
  taxSix: z.string().optional().nullable(),
  taxSixCompleted: z.boolean().optional(),
  taxSeven: z.string().optional().nullable(),
  taxSevenCompleted: z.boolean().optional(),

  yearFileId: z.string(),
  clientId: z.string(),
});

export const DebtorsSchema = z.object({
  id: z.string(),
  narrative: z.string(),
  amount: z.coerce.number().positive(),
  yearFileId: z.string(),
  clientId: z.string(),
});

export const CreateDebtorsSchema = DebtorsSchema.omit({ id: true });
export type CreateDebtorsSchemaType = z.infer<typeof CreateDebtorsSchema>;
