'use client';

import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr; // Sidebar fixa + Conteúdo fluido
  min-height: 100vh;
  background-color: var(--background);
`;

export const ContentArea = styled.main`
  /* Removemos o padding padrão aqui porque a tela de detalhes precisa encostar nas bordas no topo */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Header = styled.div`
  padding: 2rem 2rem 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: var(--muted-foreground);
  font-size: 1rem;
`;