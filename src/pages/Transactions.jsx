import TransactionsTable from "@/features/transactions/TransactionsTable";

function Transactions() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <TransactionsTable />
    </div>
  );
}

export default Transactions;
