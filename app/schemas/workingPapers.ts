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
});
