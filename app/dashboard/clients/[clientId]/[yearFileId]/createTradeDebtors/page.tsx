"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { SubmitButton } from "@/components/shared/SubmitButon";

import { useFormState } from "react-dom";

import { Switch } from "@/components/ui/switch";
import { createPlanningAction } from "@/app/actions/planning";
import {
  CreateDebtorsSchema,
  CreatePlanningSchema,
} from "@/app/schemas/workingPapers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { JSONContent } from "novel";
import { createTradeDebtorsAction } from "@/app/actions/debtors";

export default function CreatePlanningPage({
  params,
}: {
  params: { clientId: string; yearFileId: string };
}) {
  // const [taxOne, setTaxOne] = useState<JSONContent | undefined>();
  const [lastResult, action] = useFormState(
    createTradeDebtorsAction,
    undefined,
  );
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CreateDebtorsSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <>
      <div className="mb-12 flex items-center">
        <Button size="icon" variant="outline" asChild className="mr-12">
          <Link
            href={`/dashboard/clients/${params.clientId}/${params.yearFileId}`}
          >
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold text-primary">Year File</h1>
      </div>
      <div className="flex flex-grow flex-col items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="space-y-2 text-3xl font-bold text-primary">
              AUDIT EXEMPTION / ASSURANCE PROGRAMME - PLANNING SUMMARY
            </CardTitle>
            <CardDescription>
              Edit programme information in the form below.
            </CardDescription>
          </CardHeader>
          <Label className="flex w-4/6 p-4 text-lg font-bold">
            Schedule the accounts preparation work undertaken together with
            analytical review which enables the accounts to be compiled. Where
            applicable, schedule the assurance work undertaken which enables an
            assurance report to be issued.
          </Label>
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            className=""
          >
            <CardContent>
              <input type="hidden" name="clientId" value={params.clientId} />
              <input
                type="hidden"
                name="yearFileId"
                value={params.yearFileId}
              />
              <div className="flex w-full">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Label>Narrative</Label>
                    <Input
                      type="text"
                      key={fields.narrative.key}
                      name={fields.narrative.name}
                      defaultValue={fields.narrative.initialValue}
                      className="w-full"
                      placeholder="Debtor description"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label>Amount</Label>
                    <Input
                      type="number"
                      key={fields.narrative.key}
                      name={fields.amount.name}
                      defaultValue={fields.amount.initialValue}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton text="Create trade debtor" />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
