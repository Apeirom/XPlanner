'use client';

import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 2rem 2rem 2rem;
`;

interface TrilhaCardProps {
  $gradient: string;
}

export const TrilhaCard = styled.button<TrilhaCardProps>`
  width: 100%;
  text-align: left;
  /* Usa o gradiente passado via prop */
  background: ${({ $gradient }) => $gradient};
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: white; // Texto sempre branco nesses cards vibrantes

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
  }

  /* Efeito de brilho sutil no fundo */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(80px);
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
`;

export const InfoWrapper = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardProgressText = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.75rem;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

// --- Componentes da Barra de Progresso Interna ---
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3); // Fundo translúcido da barra
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: white; // Preenchimento branco
  border-radius: 9999px;
  transition: width 0.5s ease-in-out;
`;