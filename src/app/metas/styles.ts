// src/app/metas/styles.ts
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

// PageHeader agora é uma linha horizontal
export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem; // Adicionado um espaço extra abaixo do header
`;

// Container para empilhar Título e Subtítulo
export const HeaderTitlesContainer = styled.div`
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

//Botão de Criar Meta
export const NewGoalButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--primary); // Usando a cor primária (dourado XP)
  color: black; // Texto preto para contraste no dourado
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(255, 199, 0, 0.3), 0 4px 6px -2px rgba(255, 199, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  .icon-plus {
    width: 1.25rem;
    height: 1.25rem;
  }
`;