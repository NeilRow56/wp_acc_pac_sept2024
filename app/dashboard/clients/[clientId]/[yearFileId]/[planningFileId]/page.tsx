import { Button } from "@/components/ui/button";
import { EditPlanningForm } from "@/components/working_papers/EditPlanningForm";
import db from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getData(yearFileId: string, planningFileId: string) {
  const data = await db.planningFile.findFirst({
    where: {
      id: planningFileId,
      yearFileId: yearFileId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

async function getClientDetails(clientId: string) {
  const clientDetails = await db.client.findUnique({
    where: {
      id: clientId,
    },
  });

  return clientDetails;
}

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

export default async function IndividualPlanningPage({
  params,
}: {
  params: { clientId: string; yearFileId: string; planningFileId: string };
}) {
  const data = await getData(params.yearFileId, params.planningFileId);
  const clientDetails = await getClientDetails(params.clientId);
  const accountingPeriod = await getAccountingPeriod(params.yearFileId);
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
            <Link
              href={`/dashboard/clients/${params.clientId}/${params.yearFileId}`}
            >
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold text-primary">Year File</h1>
        </div>
        <div className="container mx-auto flex w-full flex-col">
          <div className="mb-6 flex w-full justify-center">
            <h1 className="text-4xl font-bold">Edit Planning</h1>
          </div>
          <EditPlanningForm data={data} yearFileId={params.yearFileId} />
        </div>
      </div>
      {/* Planning File ID: {data?.id} */}
    </>
  );
}
