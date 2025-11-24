'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
// O ScoreOverviewCard agora será importado para a coluna principal
import { ScoreOverviewCard } from '@/components/ScoreOverviewCard';
import { FinancialSummary } from '@/components/Flow/FinancialSummary';
import { TransactionList } from '@/components/Flow/TransactionList';
import { AllocationWidget } from '@/components/Flow/AllocationWidget';
import { AllocationModal } from '@/components/Flow/AllocationModal';
import { ExpenseCategoryChart } from '@/components/Flow/ExpenseCategoryChart';
import {
  mockFinancialSummary,
  mockTransactions,
  mockGoals,
  mockScoreData,
  Transaction
} from './mockData';
import * as S from './styles';

export default function FlowPage() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [isAllocationModalOpen, setIsAllocationModalOpen] = useState(false);
  const [balance, setBalance] = useState(mockFinancialSummary.balance);

  // ... (funções handleUpdateTransaction, handleOpenAllocationModal, handleCloseAllocationModal, handleConfirmAllocation permanecem iguais)
  const handleUpdateTransaction = (updatedTransaction: Transaction) => {
    const updatedTransactions = transactions.map((t) =>
      t.id === updatedTransaction.id ? updatedTransaction : t
    );
    setTransactions(updatedTransactions);
    console.log('Transação atualizada:', updatedTransaction);
  };

  const handleOpenAllocationModal = () => {
    setIsAllocationModalOpen(true);
  };

  const handleCloseAllocationModal = () => {
    setIsAllocationModalOpen(false);
  };

  const handleConfirmAllocation = (goalId: string, amount: number) => {
    setBalance((prevBalance) => prevBalance - amount);
    const newTransaction: Transaction = {
      id: `alloc-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      description: `Alocação para Meta: ${mockGoals.find(g => g.id === goalId)?.name}`,
      category: 'Investimento',
      amount: amount,
      type: 'expense',
    };
    setTransactions([newTransaction, ...transactions]);
    
    console.log(`Alocado R$${amount} para a meta ${goalId}`);
  };

  return (
    <S.PageContainer>
      <Sidebar />
      <S.Content>
        <S.MainColumn>
          <S.Header>
            <S.Title>Meu Flow de Grana</S.Title>
            <S.Subtitle>Acompanhe e controle suas finanças.</S.Subtitle>
          </S.Header>

          <ScoreOverviewCard
            score={mockScoreData.score}
            maxScore={mockScoreData.maxScore}

            pointsChanged={mockScoreData.pointsThisMonth}
            level={mockScoreData.level}
            levelTitle={mockScoreData.title}
          />

          <FinancialSummary data={{...mockFinancialSummary, balance}} />

          <TransactionList
            transactions={transactions}
            onUpdateTransaction={handleUpdateTransaction}
          />
        </S.MainColumn>

        <S.AsideColumn>
          <AllocationWidget
            balance={balance}
            onAllocate={handleOpenAllocationModal}
          />
          <ExpenseCategoryChart transactions={transactions} />
        </S.AsideColumn>
      </S.Content>
      <AllocationModal
        isOpen={isAllocationModalOpen}
        onClose={handleCloseAllocationModal}
        balance={balance}
        onConfirm={handleConfirmAllocation}
        goals={mockGoals}
      />
    </S.PageContainer>
  );
}