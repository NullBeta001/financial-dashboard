import { Card, CardContainer, DivisorDash, Subtitle, TitleCard } from "@/styles/styles";
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
        <TitleCard style={{ color: balance < 0 ? 'red' : 'green' }}>
          R${balance.toFixed(2)}
        </TitleCard>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Total Withdrawals:</Subtitle>
        <TitleCard>{formatCurrency(totalWithdrawals)}</TitleCard>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Total Deposits:</Subtitle>
        <TitleCard>{formatCurrency(totalDeposits)}</TitleCard>
      </Card>
      <DivisorDash />
      <Card>
        <Subtitle>Average:</Subtitle>
        <TitleCard>{formatCurrency(averageTransaction)}</TitleCard>
      </Card>
    </CardContainer>
  );
};

export default BalanceCard;
