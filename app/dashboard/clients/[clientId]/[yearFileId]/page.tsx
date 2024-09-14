import db from "@/lib/db";
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

export default async function YearFile({
  params,
}: {
  params: { yearFileId: string; clientId: string };
}) {
  const data = await getData(params.yearFileId);
  const clientDetails = await getClientDetails(params.clientId);
  return (
    <div>
      <div className="container mx-auto flex w-full justify-center">
        <div className="my-8">
          <h2 className="text-4xl font-bold text-primary">
            {clientDetails?.name}
          </h2>
          <h3 className="text-xl">{data.period}</h3>
        </div>
      </div>
    </div>
  );
}
