'use client';

import styled from 'styled-components';

// Reutilizando a mesma estrutura de grid da Home para consistência
export const PageContainer = styled.div`
  display: grid;
  /* Sidebar | Conteúdo Principal | Aside Direito */
  grid-template-columns: 16rem 1fr 22rem;
  min-height: 100vh;
  background-color: var(--background);
`;

export const MainContentArea = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const RightAsideArea = styled.aside`
  padding: 2rem 2rem 2rem 0;
  overflow-y: auto;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
`;

export const Subtitle = styled.p`
  color: var(--muted-foreground);
  font-size: 1rem;
`;