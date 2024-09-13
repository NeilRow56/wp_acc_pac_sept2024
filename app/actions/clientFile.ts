"use server";

import db from "@/lib/db";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { requireUser } from "@/lib/requireUser";
import { ClientFileSchema } from "../schemas/clientFile";

export async function CreateClientFileAction(
  prevState: any,
  formData: FormData,
) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: ClientFileSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  // console.log(formData);
  const data = await db.yearFile.create({
    data: {
      period: submission.value.period,
      slug: submission.value.slug,
      shortDate: submission.value.shortDate,
      periodStart: submission.value.periodStart,
      periodEnd: submission.value.periodEnd,

      userId: user.id,
      clientId: formData.get("clientId") as string,
    },
  });

  return redirect(`/dashboard/clients/${formData.get("clientId")}`);
}

export async function EditFileActions(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: ClientFileSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await db.yearFile.update({
    where: {
      userId: user.id,
      id: formData.get("yearFileId") as string,
    },
    data: {
      period: submission.value.period,
      slug: submission.value.slug,
      shortDate: submission.value.shortDate,
      periodStart: submission.value.periodStart,
      periodEnd: submission.value.periodEnd,
    },
  });

  return redirect(`/dashboard/clients/${formData.get("clientId")}`);
}

export async function DeleteFileAction(formData: FormData) {
  const user = await requireUser();

  const data = await db.yearFile.delete({
    where: {
      userId: user.id,
      id: formData.get("yearFileId") as string,
    },
  });

  return redirect(`/dashboard/clients/${formData.get("clientId")}`);
}
