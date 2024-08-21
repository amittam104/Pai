import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { LuArrowUpRight } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/services/apiTransactions";
import { getAccounts } from "@/services/apiAccounts";

function SummaryTable() {
  const summaryTable = [];

  const { data: accounts, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  if (isLoading) <p>Loading data...</p>;

  if (accounts)
    accounts.map((account) => {
      // console.log(account.accountNo);
      summaryTable.push({
        accountNo: account.accountNo,
        accountHolderName: account.accountHolderName,
        balance: account.balance,
      });
    });

  // summaryTable?.map((summary) => {
  //   console.log(summary);
  //   transactions.map((trn) => {
  //     console.log(trn);
  //     if (trn.accountNo === summary.accountNo) {
  //       summary.amount = trn.amount;
  //     }
  //   });
  // });

  // console.log(summaryTable);

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle className="font-semibold">Summary</CardTitle>
          <CardDescription className="font-medium">
            Recent transactions summary from your bank.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link to="/transactions">
            View All
            <LuArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Acc No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-medium text-slate-700">
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>Liam Johnson</TableCell>
              <TableCell className="">
                <Badge className="text-xs " variant="outline">
                  Deposit
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell ">$756</TableCell>
              <TableCell className="text-right font-bold text-slate-800">
                $2508.67
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>Amit Tambulkar</TableCell>
              <TableCell className="">
                <Badge className="text-xs " variant="outline">
                  Deposit
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell ">$654</TableCell>
              <TableCell className="text-right font-bold text-slate-800">
                $7643.23
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>Leam Nesson</TableCell>
              <TableCell className="">
                <Badge className="text-xs " variant="outline">
                  Withdraw
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell ">$344</TableCell>
              <TableCell className="text-right font-bold text-slate-800">
                $1243.67
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>John Wick</TableCell>
              <TableCell className="">
                <Badge className="text-xs " variant="outline">
                  Deposit
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell ">$4356</TableCell>
              <TableCell className="text-right font-bold text-slate-800">
                $5634.23
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>Jon Snow</TableCell>
              <TableCell className="">
                <Badge className="text-xs " variant="outline">
                  Withdraw
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell ">$3456</TableCell>
              <TableCell className="text-right font-bold text-slate-800">
                $8723.67
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default SummaryTable;
