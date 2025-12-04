"use client";

import { ColumnDef } from "@tanstack/react-table";

// Define the shape of a user
export type User = {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  interest: string;
};

// Columns definition
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
  },
  {
    accessorKey: "interest",
    header: "Interest",
  },
];
