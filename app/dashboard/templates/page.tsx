import { EmptyStateTemplates } from "@/components/client/EmptyStateTemplates";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Templates() {
  let data = 0;
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/templates/newLargeTemplatePlanning"}>
            <PlusCircle className="mr-2 size-4" /> Create Planning template -
            large
          </Link>
        </Button>
      </div>

      {data === undefined || data === 0 ? (
        <div className="container mx-auto">
          <EmptyStateTemplates
            title="You dont have any Templates created"
            description="You currently dont have any Templates. Once created you can
      see them here!"
            // buttonText=""
            // href="/"
          />
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2 text-3xl font-bold text-primary">
                  Clients
                </CardTitle>
                <CardDescription>
                  Manage your Clients in a simple and intuitive interface
                </CardDescription>
              </CardHeader>
              <CardContent>Template table</CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
