/* eslint-disable react-hooks/rules-of-hooks */
import { DataTable } from "@/ui/transactions/data-table";
import { columns } from "@/ui/transactions/columns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction, getTransactions } from "@/services/apiTransactions";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";

function transactionsTable() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  const { mutate } = useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => {
      toast({
        title: "Row deleted Successfully",
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to delete the row",
        description: "Please try Again! Reload the page if the issue persists.",
      });
    },
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
      <DataTable columns={columns(mutate)} data={data} />
    </div>
  );
}

export default transactionsTable;
