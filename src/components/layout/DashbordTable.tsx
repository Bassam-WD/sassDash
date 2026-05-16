// Custom Modules
import { columns } from "@/components/Columns";


// components
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button";
import { DataTable } from "../ui/DataTable";

// Assets
import { PlusIcon, UploadCloudIcon } from "lucide-react";

// Constants
import { VENDOR_MOVEMENTS } from "@/constants/index.ts";

function DashbordTable() {
  return (
    <div className="grid grid-cols-1 lg:border lg:rounded-xl">
      <div className="flex max-md:flex-col justify-between gap-4 md:items-center lg:py-5 lg:px-6 lg:border-b">
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Vendor Movements</h3>
            <Badge variant="outline">240 Vendors</Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Keep track of your vendor movements
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <UploadCloudIcon />
            <span>Import</span>
          </Button>

          <Button>
            <PlusIcon />
            <span>Add Vendor</span>
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={VENDOR_MOVEMENTS} />
    </div>
  );
}

export default DashbordTable;
