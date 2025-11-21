// src/app/home/page.tsx
'use client';

import * as S from './styles';
import { Sidebar } from '@/components/Sidebar';
import { HomeHeader } from '@/components/Home/HomeHeader';
import { ScoreOverviewCard } from '@/components/Home/ScoreOverviewCard';
import { PlayLearnSection } from '@/components/Home/PlayLearnSection';
import { QuickActionsAside } from '@/components/Home/QuickActionsAside';
import { XpCoinsWidget } from '@/components/Home/XpCoinsWidget';

export default function HomePage() {
  // Dados mockados para exemplo
  const userData = {
    name: 'João',
    score: 685,
    level: 4,
    levelTitle: 'Money Rookie',
    pointsChanged: 45,
  };

  return (
    <S.LayoutContainer>
      {/* Coluna 1: Sidebar Existente */}
      <Sidebar />

      {/* Coluna 2: Conteúdo Central */}
      <S.MainContentArea>
        <HomeHeader userName={userData.name} />

        <XpCoinsWidget balanceBtc={0.005} />
        
        <ScoreOverviewCard 
          score={userData.score} 
          pointsChanged={userData.pointsChanged}
          level={userData.level}
          levelTitle={userData.levelTitle}
        />

        <PlayLearnSection />

        {/* Espaço para os futuros componentes de Dimensões e Metas */}
        {/* <DimensionsGrid ... /> */}
      </S.MainContentArea>

      {/* Coluna 3: Barra Lateral Direita */}
      <S.RightAsideArea>
        <QuickActionsAside />
      </S.RightAsideArea>
    </S.LayoutContainer>
  );
}