import { EmptyState } from "@/components/dashboard/EmptyState";
import db from "@/lib/db";
import { notFound, usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowLeft, SquareCheck } from "lucide-react";
import { cn } from "@/lib/utils";

async function getPlanningFiles(yearFileId: string) {
  const result = await db.planningFile.findFirst({
    where: {
      yearFileId: yearFileId,
    },
    select: {
      id: true,
    },
  });

  return result;
}
async function getDebtorsFiles(yearFileId: string) {
  const result = await db.debtors.findFirst({
    where: {
      yearFileId: yearFileId,
    },
    select: {
      id: true,
    },
  });

  return result;
}
//

async function getAccountingPeriod(yearFileId: string) {
  const accountingPeriod = await db.yearFile.findUnique({
    where: {
      id: yearFileId,
    },
    select: {
      period: true,
    },
  });
  if (!accountingPeriod) {
    return notFound();
  }

  return accountingPeriod;
}

async function getClientDetails(clientId: string) {
  const clientDetails = await db.client.findUnique({
    where: {
      id: clientId,
    },
  });

  return clientDetails;
}

export default async function YearFile({
  params,
}: {
  params: { yearFileId: string; clientId: string };
}) {
  const accountingPeriod = await getAccountingPeriod(params.yearFileId);
  const clientDetails = await getClientDetails(params.clientId);
  const planningResults = await getPlanningFiles(params.yearFileId);
  const debtorsResults = await getDebtorsFiles(params.yearFileId);

  return (
    <>
      <div>
        <div className="container mx-auto flex w-full justify-center">
          <div className="my-8">
            <h2 className="text-4xl font-bold text-primary">
              {clientDetails?.name}
            </h2>
            <h3 className="text-xl">{accountingPeriod.period}</h3>
          </div>
        </div>
        <div className="mb-12 flex items-center">
          <Button size="icon" variant="outline" asChild className="mr-12">
            <Link href={`/dashboard/clients/${params.clientId}`}>
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold text-primary">Files</h1>
        </div>
      </div>
      <nav className="flex max-w-[450px] flex-col gap-6 pl-12 text-primary">
        <h2 className="text-2xl text-black">Section Links</h2>
      </nav>
      {/* Planning */}
      {planningResults === undefined || !planningResults ? (
        <div className="container mx-auto">
          <EmptyState
            title="Planning has not yet been created"
            description="Please create here!"
            buttonText="Create Planning File"
            href={`${params.yearFileId}/createPlanning`}
          />
        </div>
      ) : (
        <div className="flex w-[300px]">
          <Button asChild size="lg" className="ml-12">
            <Link
              className=""
              href={`${params.yearFileId}/${planningResults?.id}`}
            >
              Planning
            </Link>
          </Button>
        </div>
      )}

      {/* Debtors */}

      {debtorsResults === undefined || !debtorsResults ? (
        <div className="container mx-auto">
          <EmptyState
            title="Debtors schedules have not yet been created"
            description="Please create here!"
            buttonText="Create Debtors File"
            href={`${params.yearFileId}/createTradeDebtors`}
          />
        </div>
      ) : (
        <div className="flex w-[300px]">
          <Button asChild size="lg" className="ml-12">
            <Link
              className=""
              href={`${params.yearFileId}/debtors/${debtorsResults?.id}`}
            >
              Debtors
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
