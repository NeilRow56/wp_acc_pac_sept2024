import React from "react";

import { Button } from "@/components/ui/button";
import { PlusCircle, User, User2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { EmptyState } from "@/components/dashboard/EmptyState";

let data = 0;

export default function ClientsSummaryPage() {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/clients/newClient"}>
            <PlusCircle className="mr-2 size-4" /> Create Client
          </Link>
        </Button>
      </div>
      {data === undefined || data === 0 ? (
        <div className="container mx-auto">
          <EmptyState
            title="You dont have any Clients created"
            description="You currently dont have any Clients. Once created you can
      see them here!"
            buttonText="Create Client"
            href="/dashboard/clients/newClient"
          />
        </div>
      ) : (
        <div className="max-auto container">
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-primary">
                Clients
              </CardTitle>
              <CardDescription>
                Manage your Clients in a simple and intuitive interface
              </CardDescription>
            </CardHeader>
            <CardContent>DATA TABLE</CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
