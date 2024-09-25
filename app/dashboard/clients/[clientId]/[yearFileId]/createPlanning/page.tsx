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
import { CreatePlanningSchema } from "@/app/schemas/workingPapers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { JSONContent } from "novel";

export default function CreatePlanningPage({
  params,
}: {
  params: { clientId: string; yearFileId: string };
}) {
  // const [taxOne, setTaxOne] = useState<JSONContent | undefined>();
  const [lastResult, action] = useFormState(createPlanningAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CreatePlanningSchema });
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
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <Label className="text-lg text-primary">
                      Taxation, Payroll & VAT
                    </Label>
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">1.</div>
                      <Input
                        type="text"
                        key={fields.taxOne.key}
                        name={fields.taxOne.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Prepare tax computations and proof of tax charge."
                        }
                      />
                      {/* <input
                        type="hidden"
                        key={fields.taxOne.key}
                        name={fields.taxOne.name}
                        defaultValue={
                          "Prepare tax computations and proof of tax charge."
                        }
                        // value={JSON.stringify(taxOne)}
                      />
                      <TailwindEditor
                        onChange={setTaxOne}
                        initialValue={taxOne}
                      /> */}
                      <p className="text-red-500">{fields.taxOne.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxOneCompleted.key}
                          name={fields.taxOneCompleted.name}
                          defaultValue={fields.taxOneCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxOneCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">2.</div>
                      <Input
                        type="text"
                        className="w-full"
                        placeholder=""
                        key={fields.taxTwo.key}
                        name={fields.taxTwo.name}
                        defaultValue={
                          "Ensure any non-allowable expenditure is identified"
                        }
                      />
                      <p className="text-red-500">{fields.taxTwo.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxTwoCompleted.key}
                          name={fields.taxTwoCompleted.name}
                          defaultValue={fields.taxTwoCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxTwoCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">3.</div>
                      <Input
                        type="text"
                        key={fields.taxThree.key}
                        name={fields.taxThree.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Ensure last years CT provision is cleared by payment, or agreed as outstanding"
                        }
                      />
                      <p className="text-red-500">{fields.taxThree.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxThreeCompleted.key}
                          name={fields.taxThreeCompleted.name}
                          defaultValue={fields.taxThreeCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxThreeCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground"> 4.</div>
                      <Input
                        type="text"
                        key={fields.taxFour.key}
                        name={fields.taxFour.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Reconcile VAT year end balance and Outputs to sales."
                        }
                      />
                      <p className="text-red-500">{fields.taxFour.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxFourCompleted.key}
                          name={fields.taxFourCompleted.name}
                          defaultValue={fields.taxFourCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxFourCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">5.</div>
                      <Input
                        type="text"
                        key={fields.taxFive.key}
                        name={fields.taxFive.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Reconcile payroll charge in accounts with payroll records"
                        }
                      />
                      <p className="text-red-500">{fields.taxFive.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxFiveCompleted.key}
                          name={fields.taxFiveCompleted.name}
                          defaultValue={fields.taxFiveCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxFiveCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">6.</div>
                      <Input
                        type="text"
                        key={fields.taxSix.key}
                        name={fields.taxSix.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={" "}
                      />
                      <p className="text-red-500">{fields.taxSix.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxSixCompleted.key}
                          name={fields.taxSixCompleted.name}
                          defaultValue={fields.taxSixCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxSixCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <div className="flex w-5/6 items-center gap-8">
                      <div className="text-muted-foreground">7.</div>
                      <Input
                        type="text"
                        key={fields.taxSeven.key}
                        name={fields.taxSeven.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={" "}
                      />
                      <p className="text-red-500">{fields.taxSeven.errors}</p>
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.taxSevenCompleted.key}
                          name={fields.taxSevenCompleted.name}
                          defaultValue={fields.taxSevenCompleted.initialValue}
                        />
                        <p className="text-red-500">
                          {fields.taxSevenCompleted.errors}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton text="Create Planning" />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
