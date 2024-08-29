import { getAccounts } from "@/services/apiAccounts";
import { getLoanSummary, getCardsSummary } from "@/services/apiSummary";
import { getTransactionAmount } from "@/services/apiTransactions";
import { useQuery } from "@tanstack/react-query";

export function useDashboardCardsData() {
  // Queries to get call fecth functions and get data

  // 1. Get accounts data from accounts table
  const { data: accounts } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  // 2. Get loans data from summary table
  const { data: loans } = useQuery({
    queryKey: ["summary"],
    queryFn: getLoanSummary,
  });

  // console.log(loans);

  // 3. Get crediot cards data from summary table
  const { data: creditCards } = useQuery({
    queryKey: ["cards"],
    queryFn: getCardsSummary,
  });

  // console.log(creditCards);

  // 4. Get all transactions data from transactions table

  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactionAmount,
  });

  // Get The Dashbaord cards summary data
  const totalAccounts =
    accounts?.length < 10 ? `0${accounts?.length}` : accounts?.length;

  const totalLoanAmount = loans?.reduce(
    (acc, curr) => acc + curr?.exsistingLoan,
    0
  );

  const totalCreditCards =
    creditCards?.reduce((acc, cur) => acc + cur?.cards, 0) < 10
      ? `0${creditCards?.reduce((acc, cur) => acc + cur?.cards, 0)}`
      : creditCards?.reduce((acc, cur) => acc + cur?.cards, 0);

  const totalTransactionsAmount = transactions?.reduce(
    (acc, cur) => acc + cur?.amount,
    0
  );

  return {
    loans,
    totalAccounts,
    totalLoanAmount,
    totalCreditCards,
    totalTransactionsAmount,
  };
}
