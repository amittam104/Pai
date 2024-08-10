import AccountsTable from "@/features/accounts/AccountsTable";

function Accounts() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <AccountsTable />
    </div>
  );
}

export default Accounts;
