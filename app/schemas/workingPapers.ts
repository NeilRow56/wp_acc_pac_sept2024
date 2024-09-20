import { z } from "zod";

export const CreatePlanningSchema = z.object({
  itemOne: z.string().optional(),
  itemOneCompleted: z.boolean().optional(),
  itemTwo: z.string().optional(),
  itemTwoCompleted: z.boolean().optional(),
  itemThree: z.string().optional(),
  itemThreeCompleted: z.boolean().optional(),
  itemFour: z.string().optional(),
  itemFourCompleted: z.boolean().optional(),
  itemFive: z.string().optional(),
  itemFiveCompleted: z.boolean().optional(),
  itemSix: z.string().optional(),
  itemSixCompleted: z.boolean().optional(),
  itemSeven: z.string().optional(),
  itemSevenCompleted: z.boolean().optional(),
});
