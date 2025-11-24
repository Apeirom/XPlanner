// src/app/metas/page.tsx
'use client';

import { Sidebar } from '@/components/Sidebar';
import { GoalDetailMain } from '@/components/Goals/GoalDetailMain';
import { LearnMoreAside } from '@/components/Goals/LearnMoreAside';
// Importando o array de metas (mockGoals)
import { mockGoals, mockArticlesData } from './mockData';
import * as S from './styles';

export default function MetasPage() {
  return (
    <S.PageContainer>
      <Sidebar />

      <S.MainContentArea>
        <S.PageHeader>
          <S.Title>Suas Metas</S.Title>
          <S.Subtitle>Cada meta tem seu próprio plano de investimento e poupança.</S.Subtitle>
        </S.PageHeader>
        
        {/* Fazendo o loop sobre o array de metas */}
        {mockGoals.map((goal) => (
          <GoalDetailMain 
            key={goal.id} // Usando o ID como key
            data={goal}   // Passando os dados da meta atual
          />
        ))}

      </S.MainContentArea>

      <S.RightAsideArea>
        <LearnMoreAside articles={mockArticlesData} />
      </S.RightAsideArea>
    </S.PageContainer>
  );
}