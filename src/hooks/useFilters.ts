import { useEffect, useState } from "react";

export const useFilters = (transactions: any[]) => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    const storedYear = localStorage.getItem("selectedYear");
    const storedAccount = localStorage.getItem("selectedAccount");
    const storedIndustry = localStorage.getItem("selectedIndustry");
    const storedState = localStorage.getItem("selectedState");

    if (storedYear) setSelectedYear(storedYear);
    if (storedAccount) setSelectedAccount(storedAccount);
    if (storedIndustry) setSelectedIndustry(storedIndustry);
    if (storedState) setSelectedState(storedState);
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const isYearMatch = transaction.date.split("/")[2] === selectedYear;
    const isAccountMatch = selectedAccount
      ? transaction.account === selectedAccount
      : true;
    const isIndustryMatch = selectedIndustry
      ? transaction.industry === selectedIndustry
      : true;
    const isStateMatch = selectedState
      ? transaction.state === selectedState
      : true;

    return isYearMatch && isAccountMatch && isIndustryMatch && isStateMatch;
  });

  const setFilter = (filterType: string, value: string) => {
    switch (filterType) {
      case "year":
        setSelectedYear(value);
        localStorage.setItem("selectedYear", value);
        break;
      case "account":
        setSelectedAccount(value);
        localStorage.setItem("selectedAccount", value);
        break;
      case "industry":
        setSelectedIndustry(value);
        localStorage.setItem("selectedIndustry", value);
        break;
      case "state":
        setSelectedState(value);
        localStorage.setItem("selectedState", value);
        break;
      default:
        break;
    }
  };

  return {
    filteredTransactions,
    selectedYear,
    selectedAccount,
    selectedIndustry,
    selectedState,
    setFilter,
  };
};
