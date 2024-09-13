import { DeleteFileAction } from "@/app/actions/clientFile";
import { SubmitButton } from "@/components/shared/SubmitButon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/lib/db";
import Link from "next/link";

async function getClientDetails(clientId: string) {
  const clientDetails = await db.client.findUnique({
    where: {
      id: clientId,
    },
  });

  return clientDetails;
}

export default async function DeleteYearFile({
  params,
}: {
  params: { clientId: string; yearFileId: string };
}) {
  const clientDetails = await getClientDetails(params.clientId);
  return (
    <>
      <div className="container mx-auto flex w-full">
        <div className="my-8">
          <h2 className="text-3xl font-bold text-primary">
            {clientDetails?.name}
          </h2>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Are your absolutely sure?
            </CardTitle>
            <CardDescription className="text-xl text-red-500">
              This action cannot be undone. This will delelete this File and
              remove all data from our server
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex w-full justify-between">
            <Button variant="secondary" asChild>
              <Link href={`/dashboard/clients/${params.clientId}`}>Cancel</Link>
            </Button>
            <form action={DeleteFileAction}>
              <input
                type="hidden"
                name="yearFileId"
                value={params.yearFileId}
              />
              <input type="hidden" name="clientId" value={params.clientId} />
              <SubmitButton variant="destructive" text="Delete File" />
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
