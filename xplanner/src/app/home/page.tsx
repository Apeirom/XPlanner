// src/app/home/page.tsx
'use client';

import styled from 'styled-components';
import { Sidebar } from '@/components/Sidebar';
import { HomeHeader } from '@/components/HomeHeader';
import { ScoreOverviewCard } from '@/components/ScoreOverviewCard';
import { PlayLearnSection } from '@/components/PlayLearnSection';
import { QuickActionsAside } from '@/components/QuickActionsAside';

// O Container principal define o Grid de 3 colunas
const LayoutContainer = styled.div`
  display: grid;
  /* Sidebar Esquerda (fixa) | Conteúdo Central (flexível) | Sidebar Direita (fixa) */
  grid-template-columns: 16rem 1fr 22rem;
  min-height: 100vh;
  background-color: var(--background); // Fundo preto principal
`;

const MainContentArea = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto; // Permite scroll apenas no centro se necessário
`;

const RightAsideArea = styled.aside`
  padding: 2rem 2rem 2rem 0; // Sem padding na esquerda para alinhar com o centro
  overflow-y: auto;
`;

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
    <LayoutContainer>
      {/* Coluna 1: Sidebar Existente */}
      <Sidebar />

      {/* Coluna 2: Conteúdo Central */}
      <MainContentArea>
        <HomeHeader userName={userData.name} />
        
        <ScoreOverviewCard 
          score={userData.score} 
          pointsChanged={userData.pointsChanged}
          level={userData.level}
          levelTitle={userData.levelTitle}
        />

        <PlayLearnSection />
        
        {/* Espaço para os futuros componentes de Dimensões e Metas */}
        {/* <DimensionsGrid ... /> */}
      </MainContentArea>

      {/* Coluna 3: Barra Lateral Direita */}
      <RightAsideArea>
        <QuickActionsAside />
      </RightAsideArea>
    </LayoutContainer>
  );
}