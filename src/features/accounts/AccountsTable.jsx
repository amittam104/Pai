/* eslint-disable react/prop-types */
import { Skeleton } from "@/components/ui/skeleton";
import { getAccounts } from "@/services/apiAccounts";
import { columns } from "@/ui/accounts/columns";
import { DataTable } from "@/ui/accounts/data-table";
import { useQuery } from "@tanstack/react-query";
import { useDeleteCabin } from "./useDeleteCabin";
import { useAddAccount } from "./useAddAccount";

function AccountsTable({
  showEditForm,
  setShowEditForm,
  setEditAccount,
  editAccount,
}) {
  const { data: accounts, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  const { mutate } = useDeleteCabin();
  const { mutate: addAccount } = useAddAccount();

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
        columns={columns(
          mutate,
          setShowEditForm,
          setEditAccount,
          addAccount,
          editAccount,
          showEditForm
        )}
        data={accounts}
        showEditForm={showEditForm}
        editAccount={editAccount}
      />
    </div>
  );
}

export default AccountsTable;
