"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SubmitButton } from "../shared/SubmitButon";
import { Switch } from "../ui/switch";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { CreatePlanningSchema } from "@/app/schemas/workingPapers";

export default function CreateWorkProgrammeForm() {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CreatePlanningSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
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
          <form id={form.id} onSubmit={form.onSubmit} className="">
            <CardContent>
              <input type="hidden" name="clientId" value="" />
              <input type="hidden" name="yearFileId" value="" />
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
                        key={fields.itemOne.key}
                        name={fields.itemOne.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Prepare tax computations and proof of tax charge."
                        }
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemOneCompleted.key}
                          name={fields.itemOneCompleted.name}
                          defaultValue={fields.itemOneCompleted.initialValue}
                        />
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
                        key={fields.itemTwo.key}
                        name={fields.itemTwo.name}
                        defaultValue={
                          "Ensure any non-allowable expenditure is identified"
                        }
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemTwoCompleted.key}
                          name={fields.itemTwoCompleted.name}
                          defaultValue={fields.itemTwoCompleted.initialValue}
                        />
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
                        key={fields.itemThree.key}
                        name={fields.itemThree.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Ensure last years CT provision is cleared by payment, or agreed as outstanding"
                        }
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemThreeCompleted.key}
                          name={fields.itemThreeCompleted.name}
                          defaultValue={fields.itemThreeCompleted.initialValue}
                        />
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
                        key={fields.itemFour.key}
                        name={fields.itemFour.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Reconcile VAT year end balance and Outputs to sales."
                        }
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemFourCompleted.key}
                          name={fields.itemFourCompleted.name}
                          defaultValue={fields.itemFourCompleted.initialValue}
                        />
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
                        key={fields.itemFive.key}
                        name={fields.itemFive.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={
                          "Reconcile payroll charge in accounts with payroll records"
                        }
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemFiveCompleted.key}
                          name={fields.itemFiveCompleted.name}
                          defaultValue={fields.itemFiveCompleted.initialValue}
                        />
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
                        key={fields.itemSix.key}
                        name={fields.itemSix.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={""}
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemSixCompleted.key}
                          name={fields.itemSixCompleted.name}
                          defaultValue={fields.itemSixCompleted.initialValue}
                        />
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
                        key={fields.itemSeven.key}
                        name={fields.itemSeven.name}
                        className="w-full"
                        placeholder=""
                        defaultValue={""}
                      />
                      <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                        <Switch
                          key={fields.itemSevenCompleted.key}
                          name={fields.itemSevenCompleted.name}
                          defaultValue={fields.itemSevenCompleted.initialValue}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton text="Update Planning" />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
