//Component for columns in the dashboard
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/Badge";
import Avatar from "react-avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Assets
import {
  ArrowUpIcon,
  ArrowDownIcon,
  Edit2Icon,
  Trash2Icon,
} from "lucide-react";

// types
import type { ColumnDef } from "@tanstack/react-table";

type VendorCategories =
  | "Active"
  | "Inactive"
  | "Database access"
  | "Admin"
  | "Salesforce"
  | "Business data"
  | "Customer data"
  | "Financials"
  | "SOC2"
  | "Legal";

export type Vendor = {
  src: string;
  name: string;
  website: string;
  rating: number;
  ratingGrowthPercent: number;
  lastAssessed: string;
  categories: VendorCategories[];
};

export const columns: ColumnDef<Vendor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="flex items-center gap-2">
        <span>Vendor</span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "desc" ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          )}
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const vendor = row.original;

      return (
        <div className="flex items-center gap-3 2xl:min-w-[360px] ">
          <Avatar src={vendor.src} size="40px" round={true} />

          <div className="">
            <h3 className=" font-semibold">{vendor.name}</h3>
            <p className="text-sm text-muted-foreground">{vendor.website}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.original.rating;
      return (
        <div className="flex items-center gap-2">
          <Progress value={rating} className="min-w-24 xl:min-w-48" />
          <p className="text-sm text-muted-foreground max-lg:hidden">
            {rating}%
          </p>
        </div>
      );
    },
  },
  {
    id: "ratingGrowthPercent",
    header: "Rating Growth",
    cell: ({ row }) => {
      const growth = row.original.ratingGrowthPercent;
      const isPositive = growth >= 0;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {isPositive && <ArrowUpIcon className="text-green-500" />}
            {!isPositive && <ArrowDownIcon className="text-red-500" />}
            <span className="ml-2">{growth}%</span>
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "lastAssessed",
    header: "Last Assessed",
    cell: ({ row }) => {
      const lastAssessed = row.original.lastAssessed;
      return <p className="text-sm text-muted-foreground">{lastAssessed}</p>;
    },
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ row }) => {
      const categories = row.original.categories;
      return (
        <div className="flex gap-1">
          {categories.map(
            (item, index) =>
              index < 3 && (
                <Badge key={item} variant="outline">
                  {item === "Active" && (
                    <div className="size-1.5 bg-green-500 rounded-full"></div>
                  )}
                  {item === "Inactive" && (
                    <div className="size-1.5 bg-muted-foreground rounded-full"></div>
                  )}
                  {item}
                </Badge>
              ),
          )}

          {categories.length > 3 && (
            <Badge variant="outline">+{categories.length - 3}</Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return <div className="flex gap-1  justify-end">

        <Tooltip>
          <TooltipTrigger className="p-1 rounded-sm hover:bg-secondary/50">
            <Trash2Icon className="size-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Vendor</p>
          </TooltipContent>
        </Tooltip>


        <Tooltip>
          <TooltipTrigger className="p-1 rounded-sm hover:bg-secondary/50">
            <Edit2Icon className="size-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Vendor</p>
          </TooltipContent>
        </Tooltip>
      </div>;
    },
  },
];
