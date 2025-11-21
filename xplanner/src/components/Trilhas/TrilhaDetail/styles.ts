'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// --- Estilos do Cabeçalho ---
export const DetailHeader = styled.div<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;

  /* Efeito de brilho no fundo do header */
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(100px);
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  opacity: 0.9;
  transition: opacity 0.2s;
  position: relative;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
  .icon { width: 1.25rem; height: 1.25rem; }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

export const HeaderIcon = styled.div`
  font-size: 3.5rem;
`;

export const HeaderInfo = styled.div`
  flex: 1;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const HeaderDescription = styled.p`
  opacity: 0.9;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export const HeaderMeta = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  opacity: 0.9;
`;

export const HeaderProgressBarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  overflow: hidden;
`;

export const HeaderProgressBarFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: white;
  border-radius: 9999px;
`;

// --- Estilos da Lista de Passos ---

export const StepsListContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1; // Ocupa o resto do espaço
`;

type StepStatus = 'completed' | 'current' | 'locked';

export const StepCard = styled.button<{ $status: StepStatus }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: left;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid;
  background-color: var(--card);
  transition: all 0.2s ease;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* Estilos baseados no status */
  ${({ $status }) => {
    switch ($status) {
      case 'completed':
        return css`
          border-color: rgba(34, 197, 94, 0.3); // Verde sutil
          background-color: rgba(34, 197, 94, 0.05);
        `;
      case 'current':
        return css`
          border-color: var(--primary); // Laranja/Dourado XP
          background-color: rgba(255, 199, 0, 0.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          &:hover {
             transform: translateY(-2px);
             border-color: #FFD633;
          }
        `;
      case 'locked':
        return css`
          border-color: var(--border);
          opacity: 0.6;
          filter: grayscale(1);
        `;
    }
  }}
`;

export const StepIconWrapper = styled.div<{ $status: StepStatus }>`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $status }) => {
    switch ($status) {
      case 'completed':
        return css`
          background-color: rgba(34, 197, 94, 0.2);
          .icon-check { color: #22c55e; }
        `;
      case 'current':
        return css`
          background-color: rgba(255, 199, 0, 0.2);
          .icon-type { color: var(--primary); }
        `;
      case 'locked':
        return css`
          background-color: var(--muted);
          .icon-lock { color: var(--muted-foreground); }
        `;
    }
  }}
  
  svg { width: 1.5rem; height: 1.5rem; }
`;

export const StepInfo = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h4<{ $isCompleted: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ $isCompleted }) => ($isCompleted ? 'var(--foreground)' : 'var(--muted-foreground)')};
`;

export const StepType = styled.p`
  font-size: 0.75rem;
  color: var(--muted-foreground);
  text-transform: capitalize;
`;

export const XpBadge = styled.div`
  background-color: #22c55e; // Verde
  color: black;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;