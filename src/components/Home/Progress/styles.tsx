'use client';

import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  height: 0.5rem; /* Altura padrão, pode ser sobrescrita */
  background-color: var(--muted); /* Cor do fundo da barra (trilha) */
  border-radius: 9999px;
  overflow: hidden;
  position: relative; // Necessário para o indicador absoluto
`;

interface ProgressIndicatorProps {
  $percentage: number;
}

export const ProgressIndicator = styled.div<ProgressIndicatorProps>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  /* Gradiente padrão, pode ser sobrescrito */
  background-color: var(--primary); 
  border-radius: 9999px;
  transition: width 0.5s ease-in-out; // Animação suave ao mudar o valor
`;