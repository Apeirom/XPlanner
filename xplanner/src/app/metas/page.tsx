// src/app/metas/page.tsx
'use client';

import { Sidebar } from '@/components/Sidebar';
import { GoalDetailMain } from '@/components/Goals/GoalDetailMain';
import { LearnMoreAside } from '@/components/Goals/LearnMoreAside';
// Importando os dados mockados e centralizados
import { mockGoalData, mockArticlesData } from './mockData';
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
        
        {/* Passando os dados da meta via prop 'data' */}
        <GoalDetailMain data={mockGoalData} />
      </S.MainContentArea>

      <S.RightAsideArea>
        {/* Passando os dados dos artigos via prop 'articles' */}
        <LearnMoreAside articles={mockArticlesData} />
      </S.RightAsideArea>
    </S.PageContainer>
  );
}