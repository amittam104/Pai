import { DataTable } from "@/ui/transactions/data-table";
import { columns } from "@/ui/transactions/columns";

function transactionsTable() {
  const dummyData = [
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      accountNo: "1001",
      date: "08-08-2024",
      time: "17:20",
      type: "deposit",
      email: "m@example.com",
      balance: 2200,
      recipientAccountNo: 1004,
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      accountNo: "1002",
      date: "08-08-2024",
      time: "17:20",
      type: "withdraw",
      email: "n@example.com",
      balance: 800,
      recipientAccountNo: 1001,
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      accountNo: "1003",
      date: "08-08-2024",
      time: "17:20",
      type: "deposit",
      email: "o@example.com",
      balance: 8493,
      recipientAccountNo: 1005,
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      accountNo: "1004",
      date: "08-08-2024",
      time: "17:20",
      type: "withdraw",
      email: "m@example.com",
      balance: 9872,
      recipientAccountNo: 1002,
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      accountNo: "1005",
      date: "08-08-2024",
      time: "17:20",
      type: "deposit",
      email: "m@example.com",
      balance: 800,
      recipientAccountNo: 1001,
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      accountNo: "1005",
      date: "08-08-2024",
      time: "17:20",
      type: "deposit",
      email: "m@example.com",
      balance: 800,
      recipientAccountNo: 1001,
    },
  ];

  // const paiDummyData = [
  //   {
  //     id: 1,
  //     created_at: "2024-08-08T10:01:58.920676+00:00",
  //     accountNo: 1001,
  //     type: "deposit",
  //     amount: 200,
  //     date: "2024-08-08T15:31:37",
  //     status: "completed",
  //     balance: 2200,
  //     recipientAccountNo: 1004,
  //   },
  // ];

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={dummyData} />
    </div>
  );
}

export default transactionsTable;
