import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';
import withAuth from "../hoc/withAuth";
import { ChartContainer, DashboardContainer, FilterContainer, Title, YearSelect, Card, ContentWrapper, CardContainer, StyledLabel, StyledSelect, SelectWrapper } from "../styles/styles";

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
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [chartData, setChartData] = useState<any>(null);
  const [availableYears, setAvailableYears] = useState<any[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState<number>(0);


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
    const filteredTransactions = transactions.filter(transaction => {
      const isYearMatch = transaction.date.split("/")[2] === selectedYear;
      const isAccountMatch = selectedAccount ? transaction.account === selectedAccount : true;
      const isIndustryMatch = selectedIndustry ? transaction.industry === selectedIndustry : true;
      const isStateMatch = selectedState ? transaction.state === selectedState : true;

      return isYearMatch && isAccountMatch && isIndustryMatch && isStateMatch;
    });

    const totalDeposits = filteredTransactions
      .filter(transaction => transaction.transaction_type === "deposit")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalWithdrawals = filteredTransactions
      .filter(transaction => transaction.transaction_type === "withdraw")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    setBalance(totalDeposits - totalWithdrawals);
    setTotalDeposits(totalDeposits);
    setTotalWithdrawals(totalWithdrawals);

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
  }, [transactions, selectedYear, selectedAccount, selectedIndustry, selectedState]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>

      <FilterContainer>
        <SelectWrapper>
          <StyledLabel htmlFor="year-select">Year:</StyledLabel>
          <StyledSelect id="year-select" value={selectedYear} onChange={handleYearChange}>
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>

        <SelectWrapper>
          <StyledLabel htmlFor="account-select">Account:</StyledLabel>
          <StyledSelect id="account-select" value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
            <option value="">All Accounts</option>
            {Array.from(new Set(transactions.map(t => t.account))).map(account => (
              <option key={account} value={account}>{account}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>

        <SelectWrapper>
          <StyledLabel htmlFor="industry-select">Industry:</StyledLabel>
          <StyledSelect id="industry-select" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
            <option value="">All Industries</option>
            {Array.from(new Set(transactions.map(t => t.industry))).map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>
        <SelectWrapper>
          <StyledLabel htmlFor="state-select">State:</StyledLabel>
          <StyledSelect id="state-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">All States</option>
            {Array.from(new Set(transactions.map(t => t.state))).map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>
      </FilterContainer>

      <ContentWrapper>
        <ChartContainer>
          {chartData && <Bar data={chartData} />}
        </ChartContainer>

        <CardContainer>
          <Card>
            <h3>Balance: R${balance.toFixed(2)}</h3>
          </Card>
          <Card>
            <p>Total Withdrawals: R${totalWithdrawals.toFixed(2)}</p>
          </Card>
          <Card>
            <p>Total Deposits: R${totalDeposits.toFixed(2)}</p>
          </Card>
        </CardContainer>
      </ContentWrapper>
    </DashboardContainer>
  );
}

export default withAuth(Dashboard);
