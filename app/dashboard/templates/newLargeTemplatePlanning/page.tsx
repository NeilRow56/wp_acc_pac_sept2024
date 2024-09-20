"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { clientCategories } from "@/lib/clientCategories";

import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { clientStatus } from "@/lib/clientStatus";
import React from "react";
import { SubmitButton } from "@/components/shared/SubmitButon";
import { ClientSchema } from "@/app/schemas/client";
import { createClientAction } from "@/app/actions/client";

export default function CreateNewLargePlanningPage() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/templates">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Templates</h1>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center">
        <Card className="w-full max-w-[650px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Planning - large company
            </CardTitle>
            <h2>Taxatation, Payroll & VAT</h2>
            <CardDescription>
              In this form you can create your planning template
            </CardDescription>
          </CardHeader>
          <form className="mx-auto">
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Label>Item.1</Label>
                  <Input type="text" className="w-full" placeholder="Item.1" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton text="Create Client" />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
