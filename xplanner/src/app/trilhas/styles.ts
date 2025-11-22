'use client';

import styled from 'styled-components';

// Layout de grid de 2 colunas (Sidebar | Conteúdo)
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  min-height: 100vh;
  background-color: var(--background);
`;

export const ContentArea = styled.main`
  padding: 2rem;
  overflow-y: auto;
  height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: var(--muted-foreground);
  font-size: 1.125rem;
`;

// --- NOVO CONTAINER ADICIONADO AQUI ---
// Este estilo estava antes no componente TrilhaList
export const CardsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* padding removido pois o ContentArea já tem padding */
`;