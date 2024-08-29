import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  LuActivity,
  LuCreditCard,
  LuDollarSign,
  LuUsers,
} from "react-icons/lu";
import { useDashboardCardsData } from "./useDashboardCardsData";

function DashboardCards() {
  const {
    loans,
    totalAccounts,
    totalLoanAmount,
    totalCreditCards,
    totalTransactionsAmount,
  } = useDashboardCardsData();

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Accounts</CardTitle>
          <LuDollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAccounts}</div>
          <p className="text-xs text-muted-foreground font-semibold">
            20% saving accounts
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Loan</CardTitle>
          <LuUsers className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalLoanAmount}</div>
          <p className="text-xs text-muted-foreground font-semibold">
            Loan on {loans?.length} accounts
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Credit Cards
          </CardTitle>
          <LuCreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCreditCards}</div>
          <p className="text-xs text-muted-foreground font-semibold">
            70% users are using CC
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Transaction
          </CardTitle>
          <LuActivity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalTransactionsAmount}</div>
          <p className="text-xs text-muted-foreground font-semibold">
            50% are deposits
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCards;
