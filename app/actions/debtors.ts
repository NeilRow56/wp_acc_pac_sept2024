"use server";

import db from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { CreateDebtorsSchema } from "../schemas/workingPapers";
import { requireUser } from "@/lib/requireUser";

export async function createTradeDebtorsAction(
  prevState: any,
  formData: FormData,
) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const submission = parseWithZod(formData, {
    schema: CreateDebtorsSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await db.debtors.create({
    data: {
      narrative: submission.value.narrative,
      amount: submission.value.amount,
      clientId: formData.get("yearFileId") as string,
      yearFileId: formData.get("yearFileId") as string,
    },
  });

  return redirect(
    `/dashboard/clients/${formData.get("clientId")}/${formData.get("yearFileId")}`,
  );
}
