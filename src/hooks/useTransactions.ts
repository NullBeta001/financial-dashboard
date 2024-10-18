import { useEffect, useState } from "react";

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
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatAmount(amountString: string): number {
  return parseFloat((parseInt(amountString) / 100).toFixed(2));
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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
      })
      .catch((error) => console.error("Error loading transactions:", error));
  }, []);

  return transactions;
};
