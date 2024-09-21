import { z } from "zod";

export const CreatePlanningSchema = z.object({
  taxOne: z.string().optional(),
  taxOneCompleted: z.boolean().optional(),
  taxTwo: z.string().optional(),
  taxTwoCompleted: z.boolean().optional(),
  taxThree: z.string().optional(),
  taxThreeCompleted: z.boolean().optional(),
  taxFour: z.string().optional(),
  taxFourCompleted: z.boolean().optional(),
  taxFive: z.string().optional(),
  taxFiveCompleted: z.boolean().optional(),
  taxSix: z.string().optional(),
  taxSixCompleted: z.boolean().optional(),
  taxSeven: z.string().optional(),
  taxSevenCompleted: z.boolean().optional(),

  yearFileId: z.string(),
});
