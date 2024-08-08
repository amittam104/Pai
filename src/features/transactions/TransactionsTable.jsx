/* eslint-disable react-hooks/rules-of-hooks */
import { DataTable } from "@/ui/transactions/data-table";
import { columns } from "@/ui/transactions/columns";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/services/apiTransactions";
import { Skeleton } from "@/components/ui/skeleton";

function transactionsTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  if (isLoading)
    return (
      <div className="flex flex-col space-y-3 mt-4">
        <Skeleton className="h-32 w-full rounded-none " />
        <div className=" space-y-4 ">
          <Skeleton className="h-96 w-full py-2 px-4" />
        </div>
      </div>
    );

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default transactionsTable;
