import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
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

export default function CreateWorkProgrammeForm() {
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
          <form className="">
            <CardContent>
              <input type="hidden" name="clientId" value="" />
              <div className="flex w-full">
                <div className="flex w-5/6 flex-col gap-6">
                  <div className="mr-5 flex flex-col gap-3">
                    <Label className="text-lg text-primary">
                      Taxation, Patroll & VAT
                    </Label>
                    <Input
                      type="text"
                      className="w-full"
                      placeholder="Client Name"
                    />
                  </div>
                </div>
                <div className="w1/6 items-center border-8 border-gray-200">
                  <Switch className="" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <input type="hidden" name="clientId" value="" />
                <div className="flex flex-col gap-3">
                  <Label>Program Text2</Label>
                  <Input
                    type="text"
                    className="w-full"
                    placeholder="Client Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <input type="hidden" name="clientId" value="" />
                <div className="flex flex-col gap-3">
                  <Label>Program Text3</Label>
                  <Input
                    type="text"
                    className="w-full"
                    placeholder="Client Name"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton text="Update Client" />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
