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

import { SquareCheck } from "lucide-react";
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
  const results = await getPlanningFiles(params.yearFileId);

  return (
    <div>
      <div>
        <div className="container mx-auto flex w-full justify-center">
          <div className="my-8">
            <h2 className="text-4xl font-bold text-primary">
              {clientDetails?.name}
            </h2>
            <h3 className="text-xl">{accountingPeriod.period}</h3>
          </div>
        </div>
      </div>
      <nav className="flex max-w-[450px] flex-col gap-6 pl-12 text-primary">
        <h2 className="text-2xl text-black">Section Links</h2>
      </nav>
      {results === undefined || !results ? (
        <div className="container mx-auto">
          <EmptyState
            title="Planning has not yet been created"
            description="Please create here!"
            buttonText="Create Planning File"
            href={`${params.yearFileId}/createPlanning`}
          />
        </div>
      ) : (
        <div className="max-auto container">
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-primary">
                <div>
                  <Link
                    className="hover:text-red-800"
                    href={`${params.yearFileId}/${results?.id}`}
                  >
                    Planning
                  </Link>
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
}
