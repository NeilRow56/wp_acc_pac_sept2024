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
import { Switch } from "../ui/switch";
import { SubmitButton } from "../shared/SubmitButon";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { CreatePlanningSchema } from "@/app/schemas/workingPapers";
import {
  createPlanningAction,
  EditPlanningActions,
} from "@/app/actions/planning";
// import { useState } from "react";
// import { JSONContent } from "novel";
// import TailwindEditor from "@/app/providers/EditorWrapper";

interface EditPlanningFormProps {
  data: {
    id: string;
    taxOne: any;
    taxOneCompleted?: boolean;
    taxTwo: any;
    taxTwoCompleted?: boolean;
    taxThree: any;
    taxThreeCompleted?: boolean;
    taxFour: any;
    taxFourCompleted?: boolean;
    taxFive: any;
    taxFiveCompleted?: boolean;
    taxSix: any;
    taxSixCompleted?: boolean;
    taxSeven: any;
    taxSevenCompleted?: boolean;
  };
  yearFileId: string;
  clientId: string;
}

export function EditPlanningForm({
  data,
  yearFileId,
  clientId,
}: EditPlanningFormProps) {
  // const [taxOne, setTaxOne] = useState<JSONContent | undefined>(data.taxOne);
  const [lastResult, action] = useFormState(EditPlanningActions, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CreatePlanningSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
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
            <input type="hidden" name="planningFileId" value={data.id} />
            <input type="hidden" name="yearFileId" value={yearFileId} />
            <input type="hidden" name="clientId" value={clientId} />
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
                      defaultValue={data.taxOne}
                    />
                    {/* <input
                      type="hidden"
                      key={fields.taxOne.key}
                      name={fields.taxOne.name}
                      // defaultValue={data.taxOne}
                      value={JSON.stringify(taxOne)}
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
                        defaultChecked={data.taxOneCompleted}
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
                      defaultValue={data.taxTwo}
                    />
                    <p className="text-red-500">{fields.taxTwo.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxTwoCompleted.key}
                        name={fields.taxTwoCompleted.name}
                        defaultChecked={data.taxTwoCompleted}
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
                      defaultValue={data.taxThree}
                    />
                    <p className="text-red-500">{fields.taxThree.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxThreeCompleted.key}
                        name={fields.taxThreeCompleted.name}
                        defaultChecked={data.taxThreeCompleted}
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
                      defaultValue={data.taxFour}
                    />
                    <p className="text-red-500">{fields.taxFour.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxFourCompleted.key}
                        name={fields.taxFourCompleted.name}
                        defaultChecked={data.taxFourCompleted}
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
                      defaultValue={data.taxFive}
                    />
                    <p className="text-red-500">{fields.taxFive.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxFiveCompleted.key}
                        name={fields.taxFiveCompleted.name}
                        defaultChecked={data.taxFiveCompleted}
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
                      defaultValue={data.taxSix}
                    />
                    <p className="text-red-500">{fields.taxSix.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxSixCompleted.key}
                        name={fields.taxSixCompleted.name}
                        defaultChecked={data.taxSixCompleted}
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
                      defaultValue={data.taxSeven}
                    />
                    <p className="text-red-500">{fields.taxSeven.errors}</p>
                    <div className="w1/6 i flex h-12 flex-col items-center justify-center">
                      <Switch
                        key={fields.taxSevenCompleted.key}
                        name={fields.taxSevenCompleted.name}
                        defaultChecked={data.taxSevenCompleted}
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
            <SubmitButton text="Edit Planning" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
