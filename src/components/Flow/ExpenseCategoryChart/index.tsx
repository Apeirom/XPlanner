import { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Transaction } from '@/app/flow/mockData';
import * as S from './styles';

interface ExpenseCategoryChartProps {
  transactions: Transaction[];
}

// Cores para as fatias do gráfico (paleta vibrante para fundo escuro)
const COLORS = ['#A855F7', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#6366F1'];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

// Componente customizado para o Tooltip (declarado no escopo do módulo para não ser recriado em cada render)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <S.TooltipContainer>
        <S.TooltipLabel style={{ color: payload[0].fill }}>{data.name}</S.TooltipLabel>
        <S.TooltipValue>{formatCurrency(data.value)}</S.TooltipValue>
      </S.TooltipContainer>
    );
  }
  return null;
};

export const ExpenseCategoryChart = ({ transactions }: ExpenseCategoryChartProps) => {
  // Lógica para processar os dados (memoizada para performance)
  const chartData = useMemo(() => {
    // 1. Filtrar apenas despesas
    const expenses = transactions.filter(t => t.type === 'expense');

    // 2. Agrupar por categoria e somar valores
    const groupedData: { [key: string]: number } = {};
    expenses.forEach((transaction) => {
      const { category, amount } = transaction;
      if (groupedData[category]) {
        groupedData[category] += amount;
      } else {
        groupedData[category] = amount;
      }
    });

    // 3. Transformar em array para o Recharts e ordenar por valor (maior para menor)
    return Object.entries(groupedData)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  if (chartData.length === 0) {
    return (
      <S.Container>
        <S.Title>Gastos por Categoria</S.Title>
        <S.EmptyState>Nenhuma despesa registrada este mês.</S.EmptyState>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Gastos por Categoria</S.Title>
      <S.ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              // innerRadius cria o efeito de "rosca" (doughnut)
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2} // Espaço pequeno entre as fatias
              dataKey="value"
              nameKey="name"
              stroke="none" // Remove a borda branca padrão
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.Container>
  );
};