import { Skeleton } from "@/components/ui/skeleton";
import { deleteAccounts, getAccounts } from "@/services/apiAccounts";
import { columns } from "@/ui/accounts/columns";
import { DataTable } from "@/ui/accounts/data-table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

function AccountsTable({
  showEditForm,
  setShowEditForm,
  setEditAccount,
  editAccount,
}) {
  const queryClient = useQueryClient();

  const { data: accounts, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  const { mutate } = useMutation({
    mutationFn: deleteAccounts,
    onSuccess: () => {
      toast({
        title: "Account deleted Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
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
    <div className="container mx-auto ">
      <DataTable
        columns={columns(mutate, setShowEditForm, setEditAccount)}
        data={accounts}
        showEditForm={showEditForm}
        editAccount={editAccount}
      />
    </div>
  );
}

export default AccountsTable;
