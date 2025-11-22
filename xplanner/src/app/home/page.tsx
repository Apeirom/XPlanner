// src/app/home/page.tsx
'use client';

import * as S from './styles';
import { Sidebar } from '@/components/Sidebar';
import { UserProfileHeader } from '@/components/Home/UserProfileHeader';
import { ScoreOverviewCard } from '@/components/Home/ScoreOverviewCard';
import { PlayLearnSection } from '@/components/Home/PlayLearnSection';
import { QuickActionsAside } from '@/components/Home/QuickActionsAside';
import { XpCoinsWidget } from '@/components/Home/XpCoinsWidget';

// 1. Importamos os dados mockados centralizados
import { mockUserData, mockQuickActionsData } from './mockData';

export default function HomePage() {
  // Removemos a definição local de 'userData' que estava aqui

  return (
    <S.LayoutContainer>
      <Sidebar />

      <S.MainContentArea>
        {/* Usando dados do mockUserData */}
        <UserProfileHeader currentXP={1000} level={3} nextLevelXP={3000} streakDays={7} title='Lucas Mena' />

        {/* Usando o saldo do mockUserData */}
        <XpCoinsWidget balanceBtc={mockUserData.btcBalance} />
        
        <ScoreOverviewCard 
          score={mockUserData.score} 
          pointsChanged={mockUserData.pointsChanged}
          level={mockUserData.level}
          levelTitle={mockUserData.levelTitle}
        />

        {/* Nota: O PlayLearnSection também deveria receber dados via props no futuro */}
        <PlayLearnSection />

      </S.MainContentArea>

      <S.RightAsideArea>
        {/* 2. Passamos os dados das ações via prop 'actions' */}
        <QuickActionsAside actions={mockQuickActionsData} />
      </S.RightAsideArea>
    </S.LayoutContainer>
  );
}