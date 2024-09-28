"use server";

import db from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { CreatePlanningSchema } from "../schemas/workingPapers";
import { requireUser } from "@/lib/requireUser";

export async function createPlanningAction(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const submission = parseWithZod(formData, {
    schema: CreatePlanningSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await db.planningFile.create({
    data: {
      taxOne: submission.value.taxOne,
      taxOneCompleted: submission.value.taxOneCompleted,
      taxTwo: submission.value.taxTwo,
      taxTwoCompleted: submission.value.taxTwoCompleted,
      taxThree: submission.value.taxThree,
      taxThreeCompleted: submission.value.taxThreeCompleted,
      taxFour: submission.value.taxFour,
      taxFourCompleted: submission.value.taxFourCompleted,
      taxFive: submission.value.taxFive,
      taxFiveCompleted: submission.value.taxFiveCompleted,
      taxSix: submission.value.taxSix,
      taxSixCompleted: submission.value.taxSixCompleted,
      taxSeven: submission.value.taxSeven,
      taxSevenCompleted: submission.value.taxSevenCompleted,
      yearFileId: formData.get("yearFileId") as string,
      clientId: formData.get("clientId") as string,
    },
  });

  return redirect(
    `/dashboard/clients/${formData.get("clientId")}/${formData.get("yearFileId")}`,
  );
}

export async function EditPlanningActions(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: CreatePlanningSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await db.planningFile.update({
    where: {
      id: formData.get("planningFileId") as string,
      yearFileId: formData.get("yearFileId") as string,
      clientId: formData.get("clientId") as string,
    },
    data: {
      taxOne: submission.value.taxOne,
      taxOneCompleted: submission.value.taxOneCompleted,
      taxTwo: submission.value.taxTwo,
      taxTwoCompleted: submission.value.taxTwoCompleted,
      taxThree: submission.value.taxThree,
      taxThreeCompleted: submission.value.taxThreeCompleted,
      taxFour: submission.value.taxFour,
      taxFourCompleted: submission.value.taxFourCompleted,
      taxFive: submission.value.taxFive,
      taxFiveCompleted: submission.value.taxFiveCompleted,
      taxSix: submission.value.taxSix,
      taxSixCompleted: submission.value.taxSixCompleted,
      taxSeven: submission.value.taxSeven,
      taxSevenCompleted: submission.value.taxSevenCompleted,
    },
  });

  return redirect(
    `/dashboard/clients/${formData.get("clientId")}/${formData.get("yearFileId")}`,
  );
}
