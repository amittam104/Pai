import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAccounts } from "@/services/apiAccounts";
import { getTransactions } from "@/services/apiTransactions";
import { useQuery } from "@tanstack/react-query";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

function SummaryTable() {
  const { data: transactionsData, isLoading: isLoadingTrn } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransactions,
  });

  const { data: accountsData } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  if (isLoadingTrn) return console.log("Loading...");

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
            {transactionsData?.map((trn) => {
              return (
                <TableRow key={trn.id}>
                  <TableCell>{trn.accountNo}</TableCell>
                  <TableCell>
                    {accountsData?.map((acc) => {
                      if (acc.accountNo === trn.accountNo)
                        return acc.accountHolderName;
                    })}
                  </TableCell>
                  <TableCell className="">
                    <Badge className="text-xs " variant="outline">
                      {trn.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="md:table-cell ">
                    ${trn.amount}
                  </TableCell>
                  <TableCell className="text-right font-bold text-slate-800">
                    ${trn.balance}
                  </TableCell>
                </TableRow>
              );
            })}
            {/* {transactionsData?.map((trans) => {
              <TableRow>
                <TableCell>{trans.accountNo}</TableCell>
                <TableCell>{trans.accountHolderName}</TableCell>
                <TableCell className="">
                  <Badge className="text-xs " variant="outline">
                    {trans.type}
                  </Badge>
                </TableCell>
                <TableCell className="md:table-cell ">
                  ${trans.amount}
                </TableCell>
                <TableCell className="text-right font-bold text-slate-800">
                  ${trans.balance}
                </TableCell>
              </TableRow>;
            })} */}
            {/* <TableRow>
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
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default SummaryTable;
