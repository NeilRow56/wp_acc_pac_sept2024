import { EmptyState } from "@/components/dashboard/EmptyState";
import db from "@/lib/db";
import { notFound, usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { SquareCheck } from "lucide-react";
import { cn } from "@/lib/utils";

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

async function getYearFiles(clientId: string) {
  const allFiles = await db.yearFile.findMany({
    take: 6,
    where: {
      clientId: clientId,
    },
    orderBy: {
      shortDate: "desc",
    },
  });

  return allFiles;
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
  const clientFiles = await getYearFiles(params.clientId);

  return (
    <div>
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
      <nav className="flex max-w-[450px] flex-col gap-6 pl-12 text-primary">
        <h2 className="text-2xl text-black">Section Links</h2>
        <div className="">
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/accounts`}
          >
            Accounts
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/completion`}
          >
            Completion
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/planning`}
          >
            Planning
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/taxation`}
          >
            Taxation
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/related_parties`}
          >
            Related Parties
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/fixedAssets`}
          >
            Fixed Assets
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/stocks`}
          >
            Stocks and W.I.P
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/sales_debtors`}
          >
            Sales and Debtors
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/cash_bank`}
          >
            Cash and Bank
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/purchases_creditors`}
          >
            Purchases and Creditors
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/provisions_liabilities_charges`}
          >
            Provision for Liabilities and Charges
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/share_capital_reserves`}
          >
            Share Capital, Reserves and Statutory Information
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/wages_salaries`}
          >
            Wages and Salaries
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/trial_balance_journals`}
          >
            Trial Balance and Journals
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/vat`}
          >
            VAT
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-red-800"
            href={`${params.yearFileId}/drawings_capital_introduced`}
          >
            Drawings and Capital Introduced
          </Link>
        </div>
      </nav>
      {/* <h1 className="mb-5 mt-10 text-2xl font-semibold">Recent Articles</h1>
      {clientFiles.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 md:px-24">
          {clientFiles.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="truncate">{item.shortDate}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.period}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You dont have any articles created"
          description="Your currently dont have any articles created. Please create some so that you can see them right here"
          buttonText="Create Article"
          href="/dashboard/sites"
        />
      )} */}
    </div>
  );
}
