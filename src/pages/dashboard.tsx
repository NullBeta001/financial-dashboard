import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';
import withAuth from "../hoc/withAuth";
import { ChartContainer, DashboardContainer, ContentWrapper, DivisorDash, BarChartWrapper, LineChartWrapper, Header, HeadTitle } from "../styles/styles";
import { useTransactions } from "@/hooks/useTransactions";
import { useFilters } from "@/hooks/useFilters";
import Filters from "@/components/Filters";
import BalanceCard from "@/components/Cards";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ChartTitle, Tooltip, Legend);

function Dashboard() {
  const transactions = useTransactions();
  const {
    filteredTransactions,
    selectedYear,
    selectedAccount,
    selectedIndustry,
    selectedState,
    setFilter,
  } = useFilters(transactions);

  const [chartData, setChartData] = useState<any>(null);
  const [balance, setBalance] = useState<number>(0);
  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState<number>(0);
  const [averageTransaction, setAverageTransaction] = useState<number>(0);
  const [balanceChartData, setBalanceChartData] = useState<any>(null);
  const [availableYears, setAvailableYears] = useState<any[]>([]);

  useEffect(() => {
    if (transactions.length > 0) {
      const years = Array.from(
        new Set(transactions.map((transaction) => transaction.date.split("/")[2]))
      );
      setAvailableYears(years.sort());
    }
  }, [transactions]);

  useEffect(() => {
    const totalDeposits = filteredTransactions
      .filter(transaction => transaction.transaction_type === "deposit")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalWithdrawals = filteredTransactions
      .filter(transaction => transaction.transaction_type === "withdraw")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalTransactions = filteredTransactions.length;
    const averageTransaction = totalTransactions ? (totalDeposits + totalWithdrawals) / totalTransactions : 0;

    setBalance(totalDeposits - totalWithdrawals);
    setTotalDeposits(totalDeposits);
    setTotalWithdrawals(totalWithdrawals);
    setAverageTransaction(averageTransaction);

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const monthLabels = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthlyDeposits = Array(12).fill(0);
    const monthlyWithdrawals = Array(12).fill(0);

    filteredTransactions.forEach(transaction => {
      const monthIndex = parseInt(transaction.date.split("/")[1]) - 1;
      if (transaction.transaction_type === "deposit") {
        monthlyDeposits[monthIndex] += transaction.amount;
      } else if (transaction.transaction_type === "withdraw") {
        monthlyWithdrawals[monthIndex] += transaction.amount;
      }
    });

    const monthlyBalanceData = Array(12).fill(0);

    filteredTransactions.forEach(transaction => {
      const monthIndex = parseInt(transaction.date.split("/")[1]) - 1;
      if (transaction.transaction_type === "deposit") {
        monthlyBalanceData[monthIndex] += transaction.amount;
      } else if (transaction.transaction_type === "withdraw") {
        monthlyBalanceData[monthIndex] -= transaction.amount;
      }
    });

    const balanceChartData = {
      labels: monthLabels,
      datasets: [
        {
          label: "Monthly balance",
          data: monthlyBalanceData,
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.1,
        },
      ],
    };

    setBalanceChartData(balanceChartData);

    setChartData({
      labels: monthLabels,
      datasets: [
        {
          label: "Deposits",
          data: monthlyDeposits,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          label: "Withdrawals",
          data: monthlyWithdrawals,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [filteredTransactions]);

  return (
    <DashboardContainer>
      <Header>
        <HeadTitle>Dashboard</HeadTitle>
        <Filters
          selectedYear={selectedYear}
          selectedAccount={selectedAccount}
          selectedIndustry={selectedIndustry}
          selectedState={selectedState}
          setFilter={setFilter}
          availableYears={availableYears}
          accounts={Array.from(new Set(transactions.map(t => t.account)))}
          industries={Array.from(new Set(transactions.map(t => t.industry)))}
          states={Array.from(new Set(transactions.map(t => t.state)))}
        />
      </Header>

      <ContentWrapper>
        <BalanceCard
          balance={balance}
          totalWithdrawals={totalWithdrawals}
          totalDeposits={totalDeposits}
          averageTransaction={averageTransaction}
        />

        <ChartContainer>
          {chartData && (
            <BarChartWrapper>
              <BarChart data={chartData} />
            </BarChartWrapper>
          )}
          {balanceChartData && (
            <LineChartWrapper>
              <LineChart data={balanceChartData} />
            </LineChartWrapper>
          )}
        </ChartContainer>
      </ContentWrapper>
    </DashboardContainer>
  );
}

export default withAuth(Dashboard);
