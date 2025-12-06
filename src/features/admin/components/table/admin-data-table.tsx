"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { columns, User } from "./columns";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";
import { useQuery } from "@tanstack/react-query";

interface DataTableProps {
  data: User[];
}

export function AdminDataTable({ data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  async function fetchWaitList(): Promise<any[]> {
    const response = await axios.get(`${BACKEND_URL}/api/v1/waitList`);
    console.log("waitlists:", response.data.data);
    return response.data.data;
  }
  const {
    data: waitlists,
    error,
    isLoading
  } = useQuery({
    queryKey: [`waitlists`],
    queryFn: fetchWaitList,
  });

  return (
    <div className="overflow-hidden rounded-md border max-w-6xl mx-auto p-5 bg-white text-gray-800">
      <div className="mb-5">
        <h1 className="font-bold text-lg md:text-xl">
          Recent Waitlist Signups ({waitlists?.length})
        </h1>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
{waitlists?.length ? (
  waitlists?.map((item) => (
    <TableRow
      key={item.id}
      //data-state={row.getIsSelected && row.getIsSelected() && "selected"}
    >
      <TableCell className="py-5">{item.name}</TableCell>
      <TableCell className="py-5">{item.email}</TableCell>
      <TableCell className="py-5">{item.interest || 'N/A'}</TableCell>
      <TableCell className="py-5">{item?.referral || 'N/A'}</TableCell>
      {/* Add other columns as needed */}
    </TableRow>
  ))
) : (
  <TableRow>
    <TableCell colSpan={columns.length} className="h-24 text-center">
      No results.
    </TableCell>
  </TableRow>
)}
      </Table>
    </div>
  );
}
