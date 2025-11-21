'use client';

import styled from 'styled-components';

export const Container = styled.div`
  /* Fundo e borda translúcidos para o efeito de "vidro" sutil */
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1rem;
  /* Efeito de blur no fundo */
  backdrop-filter: blur(10px);
`;

export const WidgetContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CoinIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  /* Gradiente dourado/laranja para o ícone de moeda */
  background: linear-gradient(to bottom right, #facc15, #f97316);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-size: var(--text-xs);
  color: var(--muted-foreground);
`;

export const Balance = styled.p`
  color: var(--foreground);
  font-weight: var(--font-weight-medium);
`;