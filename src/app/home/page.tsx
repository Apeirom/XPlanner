// src/app/home/page.tsx
'use client';

import * as S from './styles';
import { Sidebar } from '@/components/Sidebar';
import { UserProfileHeader } from '@/components/Home/UserProfileHeader';
import { ScoreOverviewCard } from '@/components/ScoreOverviewCard';
import { PlayLearnSection } from '@/components/Home/PlayLearnSection';
import { QuickActionsAside } from '@/components/Home/QuickActionsAside';
import { XpCoinsWidget } from '@/components/Home/XpCoinsWidget';
import { InitialQuizCTA } from '@/components/Home/InitialQuizCTA';

// 1. Importamos os dados mockados centralizados
import { mockUserData, mockQuickActionsData } from './mockData';

export default function HomePage() {
  // Lógica: Se NÃO completou o quiz, mostra o CTA.
  const showQuizCTA = !mockUserData.hasCompletedQuiz;

  return (
    <S.LayoutContainer>
      <Sidebar />

      <S.MainContentArea>
        {/* O Header agora usa todos os dados do mockUserData */}
        <UserProfileHeader
          level={mockUserData.level}
          title={mockUserData.title}
          currentXP={mockUserData.currentXP}
          nextLevelXP={mockUserData.nextLevelXP}
          streakDays={mockUserData.streakDays}
          avatarEmoji={mockUserData.avatarEmoji}
        />

        <XpCoinsWidget balanceBtc={mockUserData.btcBalance} />

        {/* RENDERIZAÇÃO CONDICIONAL DO CONTEÚDO PRINCIPAL */}
        {showQuizCTA ? (
          // CENÁRIO 1: Usuário NOVO (Não fez o quiz)
          // Mostra o CTA para incentivar a ação inicial
          <InitialQuizCTA />
        ) : (
          // CENÁRIO 2: Usuário VETERANO (Já tem score)
          // Mostra o dashboard com Score, Moedas e Jogos

          <ScoreOverviewCard 
            score={mockUserData.score} 
            pointsChanged={mockUserData.pointsChanged}
            level={mockUserData.level}
            levelTitle={mockUserData.title} // Usando o mesmo título do header
          />

        )}
        {/* FIM DA RENDERIZAÇÃO CONDICIONAL */}
        <PlayLearnSection />

      </S.MainContentArea>

      <S.RightAsideArea>
        {/* As ações rápidas laterais podem continuar aparecendo */}
        <QuickActionsAside actions={mockQuickActionsData} />
      </S.RightAsideArea>
    </S.LayoutContainer>
  );
}