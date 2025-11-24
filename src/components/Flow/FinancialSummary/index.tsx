import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { FinancialSummaryData } from '@/app/flow/mockData';
import * as S from './styles';

interface FinancialSummaryProps {
  data: FinancialSummaryData;
}

export const FinancialSummary = ({ data }: FinancialSummaryProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <S.Container>
      <S.Section>
        <S.SectionHeader>
          Entradas
          <S.TrendIcon $type="income">
            <ArrowUpRight size={16} />
          </S.TrendIcon>
        </S.SectionHeader>
        <S.Value $type="income">{formatCurrency(data.income)}</S.Value>
      </S.Section>
      <S.Section>
        <S.SectionHeader>
          Saídas
          <S.TrendIcon $type="expense">
            <ArrowDownRight size={16} />
          </S.TrendIcon>
        </S.SectionHeader>
        <S.Value $type="expense">{formatCurrency(data.expense)}</S.Value>
      </S.Section>
      <S.Section>
        <S.SectionHeader>Saldo do Mês</S.SectionHeader>
        <S.Value $type="balance">{formatCurrency(data.balance)}</S.Value>
      </S.Section>
    </S.Container>
  );
};