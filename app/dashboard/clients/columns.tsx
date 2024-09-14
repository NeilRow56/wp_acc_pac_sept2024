"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  id: string;
  name: string;
  category:
    | "limited_company"
    | "partnership"
    | "sole_trader"
    | "charity"
    | "other";
  status: "awaiting_ml_checks" | "active" | "archived" | "stop_work";
  // workSuspended: true | false;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("rounded-lg p-2 text-start text-lg font-bold capitalize")}
      >
        {row.original.name}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg p-2 text-start capitalize")}>
        {row.original.category}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            className="px-0"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn(
          "rounded-lg p-2 text-center capitalize",
          row.original.status === "active" &&
            "bg-emerald-400/10 text-emerald-500",
          row.original.status === "archived" && "bg-red-400/10 text-red-500",
          row.original.status === "stop_work" && "bg-red-400/10 text-red-500",
          row.original.status === "awaiting_ml_checks" &&
            "bg-amber-400/10 text-amber-500",
        )}
      >
        {row.original.status}
      </div>
    ),
  },

  {
    id: "actions",

    header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        Actions
      </div>
    ),
    cell: ({ row }) => {
      // IMPORTANT THIS IS THE CLIENT DATA FROM WHICH YOU CAN GET THE ID
      const client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center">
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/clients/${client.id}`}>Files</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/clients/${client.id}/editClient`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/clients/${client.id}/deleteClient`}>
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
