import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = (
  mutate,
  setShowEditForm,
  setEditAccount,
  addAccount
) => [
  {
    accessorKey: "accountNo",
    header: "Account No",
  },
  {
    accessorKey: "accountHolderName",
    header: "Owner Name",
  },
  {
    accessorKey: "accountType",
    header: "Account Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "balance",
    header: () => <div className="text-right">Balance</div>,
    cell: ({ row }) => {
      const balance = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const account = row.original;

      function handleDeleteAccount() {
        mutate(account.id);
      }

      function handleEditAccount() {
        setShowEditForm((show) => !show);
        setEditAccount(account);
      }

      function handleDuplicateAccount() {
        addAccount({
          ...account,
          accountHolderName: `Copy of ${account.accountHolderName}`,
          accountNo: account.accountNo + Math.round(Math.random * 1),
        });
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDeleteAccount}
              className="text-destructive font-semibold"
            >
              Delete Account
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleEditAccount}
              className="text-foreground font-semibold"
            >
              Edit Account
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDuplicateAccount}
              className="text-foreground font-semibold"
            >
              Duplicate Account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
