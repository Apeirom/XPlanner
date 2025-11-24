'use client';

import styled from 'styled-components';

// Layout padrão de grid com sidebar
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  min-height: 100vh;
  background-color: var(--background);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Área de conteúdo principal com fundo escuro
export const ContentArea = styled.main`
  padding: 0;
  overflow-y: auto;
  height: 100vh;
  background-color: #09090b; // zinc-950
  
  // Espaçamento extra no final para telas menores (mobile)
  @media (max-width: 768px) {
    padding-bottom: 6rem; // pb-24
  }
`;