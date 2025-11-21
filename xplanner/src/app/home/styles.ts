'use client';

import styled from 'styled-components';

// O Container principal define o Grid de 3 colunas
export const LayoutContainer = styled.div`
  display: grid;
  /* Sidebar Esquerda (fixa) | Conteúdo Central (flexível) | Sidebar Direita (fixa) */
  grid-template-columns: 16rem 1fr 22rem;
  min-height: 100vh;
  background-color: var(--background); // Fundo preto principal
`;

export const MainContentArea = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto; // Permite scroll apenas no centro se necessário
`;

export const RightAsideArea = styled.aside`
  padding: 2rem 2rem 2rem 0; // Sem padding na esquerda para alinhar com o centro
  overflow-y: auto;
`;