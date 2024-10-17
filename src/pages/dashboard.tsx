import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';
import withAuth from "../hoc/withAuth";
import { ChartContainer, DashboardContainer, FilterContainer, Title, YearSelect } from "../styles/styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

interface Transaction {
  account: string;
  amount: number;
  currency: string;
  date: string;
  industry: string;
  state: string;
  transaction_type: "deposit" | "withdraw";
}

function formatDate(epochTime: number): string {
  const date = new Date(epochTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatAmount(amountString: string): number {
  return parseFloat((parseInt(amountString) / 100).toFixed(2));
}

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const [chartData, setChartData] = useState<any>(null);
  const [availableYears, setAvailableYears] = useState<any[]>([]);

  useEffect(() => {
    fetch("/transactions.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((transaction: any) => ({
          ...transaction,
          date: formatDate(transaction.date),
          amount: formatAmount(transaction.amount),
        }));

        setTransactions(formattedData);

        const years = Array.from(
          new Set(formattedData.map((transaction: Transaction) => transaction.date.split("/")[2]))
        );
        setAvailableYears(years.sort());
      })
      .catch((error) => console.error("Error loading transactions:", error));
  }, []);

  useEffect(() => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.date.split("/")[2] === selectedYear
    );

    const monthLabels = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
  }, [transactions, selectedYear]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>

      <FilterContainer>
        <label htmlFor="year-select">Select the year:</label>
        <YearSelect id="year-select" value={selectedYear} onChange={handleYearChange}>
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </YearSelect>
      </FilterContainer>

      {chartData && (
        <ChartContainer>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  stacked: true,
                },
                x: {
                  stacked: true,
                },
              },
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </ChartContainer>
      )}
    </DashboardContainer>
  );
}

export default withAuth(Dashboard);
