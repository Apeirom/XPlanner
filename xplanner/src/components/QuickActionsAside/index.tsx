'use client';

import * as S from './styles';

export function QuickActionsAside() {
  return (
    <S.Container>
      <S.Title>Next Best Actions</S.Title>
      
      <S.ActionsList>
        {/* Action Card 1 */}
        <S.ActionCard>
          <S.CardTitle>Start the trail &quot;Break Up With Your Debts&quot;</S.CardTitle>
          <S.CardDescription>
            Learn strategies to pay off debt faster.
          </S.CardDescription>
          <S.PrimaryButton>Start Trail</S.PrimaryButton>
        </S.ActionCard>

        {/* Action Card 2 */}
        <S.ActionCard>
          <S.CardTitle>Create your first emergency fund goal</S.CardTitle>
          <S.CardDescription>
            Build a safety net for unexpected expenses.
          </S.CardDescription>
          <S.PrimaryButton>Create Goal</S.PrimaryButton>
        </S.ActionCard>
        
        {/* Action Card 3 (Exemplo secundário) */}
        <S.ActionCard>
          <S.CardTitle>Take a 2-minute quiz to update your score</S.CardTitle>
          <S.CardDescription>
             Keep your financial health score accurate.
          </S.CardDescription>
          {/* Botão secundário para variar */}
          <S.SecondaryButton>Take Quiz</S.SecondaryButton>
        </S.ActionCard>
      </S.ActionsList>
    </S.Container>
  );
}