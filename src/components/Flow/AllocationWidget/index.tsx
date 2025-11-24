import { PiggyBank } from 'lucide-react';
// Removemos a importação do botão global
// import { Button } from '@/components/Button';
import * as S from './styles';

interface AllocationWidgetProps {
  balance: number;
  onAllocate: () => void;
}

export const AllocationWidget = ({ balance, onAllocate }: AllocationWidgetProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Icon>
          <PiggyBank size={24} />
        </S.Icon>
        <S.Title>Destinar Saldo</S.Title>
      </S.Header>
      <S.Content>
        <S.BalanceLabel>Saldo Disponível:</S.BalanceLabel>
        <S.BalanceValue>{formatCurrency(balance)}</S.BalanceValue>
        <S.Description>
          Direcione uma parte do seu saldo para acelerar suas metas financeiras.
        </S.Description>
        {/* Usamos o botão estilizado localmente */}
        <S.AllocateButton onClick={onAllocate}>Alocar Saldo</S.AllocateButton>
      </S.Content>
    </S.Container>
  );
};