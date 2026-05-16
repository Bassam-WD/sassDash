import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

// components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from  "@/components/ui/kbd";

// Assets
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ListFilterIcon,
  SearchIcon,
} from "lucide-react";

// Types
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type Filter = "view-all" | "monitored" | "unmonitored";

// Hooks
import { useState } from "react";

export function DataTable<TData, TValue>({
  columns,
  data,
}: Props<TData, TValue>) {
  const [filter, setFilter] = useState<Filter>("view-all");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      sorting,
      rowSelection,
    },
  });

  return (
    <div className="max-md:mx-4 max-lg:mx-8">
      <div className="flex gap-4  lg:justify-between p-6 max-lg:flex-col ">
        <ToggleGroup
          type="single"
          variant="outline"
          value={filter}
          onValueChange={(value) => setFilter(value)}
        >
          <ToggleGroupItem value="view-all">View All</ToggleGroupItem>
          <ToggleGroupItem value="monitored">Monitored</ToggleGroupItem>
          <ToggleGroupItem value="unmonitored">Unmonitored</ToggleGroupItem>
        </ToggleGroup>

        <div className="flex gap-3">
          <InputGroup>
            <InputGroupInput
              placeholder="Search..."
              value={table.getColumn("name")?.getFilterValue() as string}
              onChange={(e) =>
                table.getColumn("name")?.setFilterValue(e.target.value)
              }
            />

            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>

            <InputGroupAddon align="inline-end">
              <kbd className="text-xs">⌘K</kbd>
            </InputGroupAddon>
          </InputGroup>

          <Button variant="outline">
            <ListFilterIcon />
            <span className="max-lg:hidden">Filter</span>
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-secondary/40 border-t">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex gap-3 justify-between items-center border-t px-6 py-3">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="max-md:hidden">Previous</span>
          <ChevronLeftIcon />
        </Button>

        <p className="text-sm font-semibold text-muted-foreground ">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>

        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="max-md:hidden">Next</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
