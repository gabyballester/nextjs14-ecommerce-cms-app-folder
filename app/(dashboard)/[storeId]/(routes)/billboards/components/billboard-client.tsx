"use client";

import { FC } from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { ApiUrlList, Button, Heading, Separator } from "@/components/index";
import { BillboardColumn, BillboardDataTable, billboardColumns } from "./table";

interface Props {
  data: BillboardColumn[];
}

export const BillboardClient: FC<Props> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          size="sm"
          disabled={false}
          onClick={() => router.push(`/${params?.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <BillboardDataTable
        searchKey="label"
        showPagination={true}
        columns={billboardColumns}
        data={data}
      />
      <Heading title={"API"} description={"API calls for Billboards"}></Heading>
      <Separator />
      <ApiUrlList entityName={"billboards"} entityIdName={"billboardId"} />
    </>
  );
};
