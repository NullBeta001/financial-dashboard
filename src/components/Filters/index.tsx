import { FilterContainer, SelectWrapper, StyledLabel, StyledSelect } from "@/styles/styles";

interface FiltersProps {
  selectedYear: string;
  selectedAccount: string;
  selectedIndustry: string;
  selectedState: string;
  setFilter: (filterType: string, value: string) => void;
  availableYears: string[];
  accounts: string[];
  industries: string[];
  states: string[];
}

const Filters: React.FC<FiltersProps> = ({
  selectedYear,
  selectedAccount,
  selectedIndustry,
  selectedState,
  setFilter,
  availableYears,
  accounts,
  industries,
  states,
}) => {
  return (
    <FilterContainer>
      <SelectWrapper>
        <StyledLabel htmlFor="year-select">Year:</StyledLabel>
        <StyledSelect id="year-select" value={selectedYear} onChange={(e) => setFilter("year", e.target.value)}>
          {availableYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>

      <SelectWrapper>
        <StyledLabel htmlFor="account-select">Account:</StyledLabel>
        <StyledSelect id="account-select" value={selectedAccount} onChange={(e) => setFilter("account", e.target.value)}>
          <option value="">All Accounts</option>
          {accounts.map(account => (
            <option key={account} value={account}>{account}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>

      <SelectWrapper>
        <StyledLabel htmlFor="industry-select">Industry:</StyledLabel>
        <StyledSelect id="industry-select" value={selectedIndustry} onChange={(e) => setFilter("industry", e.target.value)}>
          <option value="">All Industries</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>

      <SelectWrapper>
        <StyledLabel htmlFor="state-select">State:</StyledLabel>
        <StyledSelect id="state-select" value={selectedState} onChange={(e) => setFilter("state", e.target.value)}>
          <option value="">All States</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </FilterContainer>
  );
};

export default Filters;
