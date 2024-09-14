import { EditFileForm } from "@/components/client/EditFileForm";
import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getData(yearFileId: string) {
  const data = await db.yearFile.findUnique({
    where: {
      id: yearFileId,
    },
    select: {
      period: true,
      slug: true,
      shortDate: true,
      periodStart: true,
      periodEnd: true,
      clientId: true,
      id: true,
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

export default async function EditYearFile({
  params,
}: {
  params: { yearFileId: string; clientId: string };
}) {
  const data = await getData(params.yearFileId);
  const clientDetails = await getClientDetails(params.clientId);
  return (
    <div>
      <div className="flex items-center">
        <Button size="icon" variant="outline" asChild className="mr-12">
          <Link href={`/dashboard/clients/${params.clientId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold text-primary">Edit File</h1>
      </div>
      <div className="container mx-auto flex w-full justify-center">
        <div className="my-8">
          <h2 className="text-4xl font-bold text-primary">
            {clientDetails?.name}
          </h2>
        </div>
      </div>
      <EditFileForm data={data} clientId={params.clientId} />
    </div>
  );
}
