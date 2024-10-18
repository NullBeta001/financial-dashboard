import { Card, CardContainer, DivisorDash, Subtitle } from "@/styles/styles";
import { formatCurrency } from "@/utils/formatValue";

interface BalanceCardProps {
  balance: number;
  totalWithdrawals: number;
  totalDeposits: number;
  averageTransaction: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  totalWithdrawals,
  totalDeposits,
  averageTransaction,
}) => {
  return (
    <CardContainer>
      <Card>
        <Subtitle>Balance:</Subtitle>
        <h1 style={{ color: balance < 0 ? 'red' : 'green' }}>
          R${balance.toFixed(2)}
        </h1>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Total Withdrawals:</Subtitle>
        <h1>{formatCurrency(totalWithdrawals)}</h1>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Total Deposits:</Subtitle>
        <h1>{formatCurrency(totalDeposits)}</h1>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Average:</Subtitle>
        <h1>{formatCurrency(averageTransaction)}</h1>
      </Card>
    </CardContainer>
  );
};

export default BalanceCard;
