import { Transaction } from '@/app/flow/mockData';
import { TransactionItem } from '../TransactionItem';
import * as S from './styles';

interface TransactionListProps {
  transactions: Transaction[];
  onUpdateTransaction: (updatedTransaction: Transaction) => void;
}

export const TransactionList = ({ transactions, onUpdateTransaction }: TransactionListProps) => {
  return (
    <S.Container>
      <S.Title>Transações do Mês</S.Title>
      <S.List>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onUpdate={onUpdateTransaction}
          />
        ))}
      </S.List>
    </S.Container>
  );
};