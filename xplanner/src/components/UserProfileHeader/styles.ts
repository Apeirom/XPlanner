'use client';

import styled from 'styled-components';
import { Progress as ShadcnProgress } from '@/components/ui/progress'; // Importe o componente base

export const Container = styled.div`
  /* Fundo com gradiente sutil para destacar o header */
  background: linear-gradient(to bottom, #121214, #0c0c0e);
  padding: 3rem 1.5rem 2rem;
  border-bottom: 1px solid var(--border);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const AvatarContainer = styled.div`
  width: 5rem;
  height: 5rem;
  /* Gradiente vibrante para o avatar */
  background: linear-gradient(to bottom right, #a855f7, #ec4899, #f59e0b);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  /* Sombra colorida */
  box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.2);

  .emoji {
    font-size: 1.875rem; // text-3xl
  }
`;

export const LevelBadge = styled.div`
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
  background-color: #f59e0b; // Cor âmbar/laranja
  border-radius: 9999px;
  padding: 0.125rem 0.5rem;
  border: 2px solid var(--background); // Borda da cor do fundo para separar

  span {
    font-size: var(--text-xs);
    color: black;
    font-weight: var(--font-weight-medium);
  }
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const TopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const LevelText = styled.p`
  color: var(--muted-foreground);
  font-size: var(--text-sm);
`;

export const TitleText = styled.h2`
  color: var(--foreground);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
`;

export const StreakBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* Gradiente sutil de fogo */
  background: linear-gradient(to right, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2));
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(249, 115, 22, 0.3);

  span {
    color: var(--foreground);
    font-weight: var(--font-weight-medium);
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--text-xs);

  .current {
    color: var(--muted-foreground);
  }

  .next {
    color: #f59e0b; // Cor âmbar para o objetivo
    font-weight: var(--font-weight-medium);
  }
`;

// Estilizando o componente Progress do shadcn/ui
export const StyledProgress = styled(ShadcnProgress)`
  height: 0.5rem;
  background-color: var(--muted); // Cor de fundo da barra
  
  /* Acessa a parte interna da barra de progresso para mudar a cor */
  > div {
    /* Gradiente para a barra de progresso */
    background: linear-gradient(to right, #a855f7, #f59e0b);
    border-radius: 9999px;
  }
`;