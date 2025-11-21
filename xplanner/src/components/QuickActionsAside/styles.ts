'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* Fixa a barra lateral ao rolar a página */
  position: sticky;
  top: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--foreground);
  font-weight: 600;
`;

export const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionCard = styled.div`
  /* Estilo de card de vidro padrão */
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 199, 0, 0.3); // Brilho dourado sutil no hover
  }
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  color: var(--foreground);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 1.25rem;
  line-height: 1.4;
`;

const BaseButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  /* Gradiente XP */
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: black;
  border: none;
  
  &:hover {
    background: linear-gradient(90deg, #FFB84D 0%, #FFD633 100%);
    box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--foreground);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }
`;