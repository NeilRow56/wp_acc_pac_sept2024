import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CompletionSummaryPage({
  params,
}: {
  params: { yearFileId: string; clientId: string };
}) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link
            href={`/dashboard/clients/${params.clientId}/${params.yearFileId}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">
          Working papers - summary
        </h1>
      </div>

      <div className="mt-16 flex flex-col">
        <h1 className="text-3xl font-bold text-primary">Completion Page</h1>
      </div>
    </>
  );
}
