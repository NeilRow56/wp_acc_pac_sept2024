"use client";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Atom } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import slugify from "react-slugify";
import { toast } from "sonner";
import { SubmitButton } from "@/components/shared/SubmitButon";
import { ClientFileSchema } from "@/app/schemas/clientFile";
import { CreateClientFileAction } from "@/app/actions/clientFile";
import { useFormState } from "react-dom";
import db from "@/lib/db";

export default function CreateFilePage({
  params,
}: {
  params: { clientId: string };
}) {
  const [slug, setSlugValue] = useState<undefined | string>("");
  const [period, setPeriod] = useState<undefined | string>("");

  const [lastResult, action] = useFormState(CreateClientFileAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ClientFileSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  function handleSlugGeneration() {
    const periodInput = period;

    if (periodInput?.length === 0 || periodInput === undefined) {
      return toast.error("Pleaes create a period first");
    }

    setSlugValue(slugify(periodInput));

    return toast.success("Slug has been created");
  }
  return (
    <>
      <div className="flex w-full items-center">
        <Button size="icon" variant="outline" className="mr-12" asChild>
          <Link href={`/dashboard/clients/${params.clientId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-primary">Create File</h1>
      </div>
      <div className="container mx-auto flex max-w-[900px] flex-col justify-center">
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              File Details
            </CardTitle>
            <CardDescription>Add basic file information.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id={form.id}
              onSubmit={form.onSubmit}
              action={action}
              className="flex flex-col gap-6"
            >
              <input type="hidden" name="clientId" value={params.clientId} />
              <div className="grid gap-2">
                <Label className="text-lg font-bold">Period </Label>

                <Input
                  key={fields.period.key}
                  name={fields.period.name}
                  defaultValue={fields.period.initialValue}
                  placeholder="Period ending 31.12.2023"
                  onChange={(e) => setPeriod(e.target.value)}
                  value={period}
                />

                <p className="text-sm text-red-500">{fields.period.errors}</p>
              </div>

              <div className="grid gap-2">
                <Label className="text-lg font-bold">Slug</Label>
                <Input
                  key={fields.slug.key}
                  name={fields.slug.name}
                  defaultValue={fields.slug.initialValue}
                  placeholder="File Slug"
                  onChange={(e) => setSlugValue(e.target.value)}
                  value={slug}
                />
                <Button
                  onClick={handleSlugGeneration}
                  className="w-fit"
                  variant="secondary"
                  type="button"
                >
                  <Atom className="mr-2 size-4" /> Generate Slug
                </Button>
                <p className="text-sm text-red-500">{fields.slug.errors}</p>
              </div>

              <div className="grid gap-2">
                <Label className="text-lg font-bold">Period start date </Label>
                <Input
                  key={fields.periodStart.key}
                  name={fields.periodStart.name}
                  defaultValue={fields.periodStart.initialValue}
                  type="date"
                  placeholder=" 01.01.2023"
                />
                <p className="text-sm text-red-500">
                  {fields.periodStart.errors}
                </p>
              </div>
              <div className="grid gap-2">
                <Label className="text-lg font-bold">Period end date </Label>
                <Input
                  key={fields.periodEnd.key}
                  name={fields.periodEnd.name}
                  defaultValue={fields.periodEnd.initialValue}
                  type="date"
                  placeholder=" 01.01.2023"
                />
                <p className="text-sm text-red-500">
                  {fields.periodEnd.errors}
                </p>
              </div>

              <div className="grid gap-2">
                <Label className="text-lg font-bold">
                  Short date (number e.g. 2024){" "}
                </Label>
                <Input
                  key={fields.shortDate.key}
                  name={fields.shortDate.name}
                  defaultValue={fields.shortDate.initialValue}
                  type="number"
                />
                <p className="text-sm text-red-500">{fields.period.errors}</p>
              </div>

              <SubmitButton text="Create File" />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
