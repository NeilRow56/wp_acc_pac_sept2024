import { notFound, redirect } from "next/navigation";

import db from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Book, Edit, PlusCircle } from "lucide-react";
import { EmptyState } from "@/components/dashboard/EmptyState";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getClientDetails(clientId: string) {
  const clientDetails = await db.client.findUnique({
    where: {
      id: clientId,
    },
  });

  return clientDetails;
}

export default async function ClientIDPage({
  params,
}: {
  params: { clientId: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user?.id) return redirect("/");

  let data = 0;
  const clientDetails = await getClientDetails(params.clientId);
  return (
    <>
      <div className="container flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href={"/"}>
            <Book className="mr-2 size-4" />
            View What?
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/dashboard/clients/${params.clientId}/edit`}>
            <Edit className="mr-2 size-4" />
            Edit
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/clients/${params.clientId}/createFile`}>
            <PlusCircle className="mr-2 size-4" />
            Create File
          </Link>
        </Button>
      </div>
      <div className="container flex w-full">
        <div className="my-8">
          <h2 className="text-3xl font-bold text-primary">
            {clientDetails?.name}
          </h2>
        </div>
      </div>

      {data === undefined || data === 0 ? (
        <EmptyState
          title="You dont have any Files created"
          description="You currently dont have any files. When created you can see them right here"
          buttonText="Create File"
          href={`/dashboard/clients/${params.clientId}/createFile`}
        />
      ) : (
        <div className="max-auto container">
          <Card>
            <CardHeader>
              <CardTitle className="mb-2 font-bold text-primary">
                Files
              </CardTitle>
              <CardDescription>
                Manage your Files in a simple and intuitive interface
              </CardDescription>
            </CardHeader>
            <CardContent>CLIENT FILES DATA</CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
