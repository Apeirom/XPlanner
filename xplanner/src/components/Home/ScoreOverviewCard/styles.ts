'use client';

import styled, { css } from 'styled-components';

// 1. Adicionando prop para controle de hover
interface CardContainerProps {
  $isClickable?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  /* Estilo de card de vidro escuro padrão do projeto */
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem; // Rounded-3xl
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease; // Transição suave para o hover

  /* 1. Aplica estilos de interatividade apenas se for clicável */
  ${({ $isClickable }) => $isClickable && css`
    cursor: pointer;
    &:hover {
      border-color: var(--primary); // Brilho dourado na borda
      transform: translateY(-2px); // Leve elevação
      box-shadow: 0 10px 20px -10px rgba(255, 199, 0, 0.15); // Sombra sutil
    }
  `}
`;

export const CircularProgressWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  /* Rotaciona para começar do topo */
  transform: rotate(-90deg);
`;

// 3. A transição CSS que fará a animação funcionar
export const ProgressCircle = styled.circle`
  transition: stroke-dashoffset 1.5s ease-in-out; // Aumentei um pouco o tempo para ficar mais suave
`;

export const ScoreContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* Desfaz a rotação do wrapper para o texto ficar reto */
  transform: translate(-50%, -50%) rotate(90deg);
  text-align: center;
`;

export const ScoreValue = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  /* Texto com gradiente XP */
  background: linear-gradient(90deg, #FF9900, #FFC700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

export const ScoreLabel = styled.div`
  color: var(--muted-foreground);
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--foreground);
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  color: var(--muted-foreground);
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; // Garante que não quebre em telas menores
`;

// 2. CORREÇÃO DE ESTILO DAS TAGS
const BaseTag = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600; // Aumentei um pouco o peso
  
  /* --- Flexbox para centralização perfeita --- */
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1; // Remove espaçamento vertical extra
  white-space: nowrap; // Evita quebra de linha dentro da tag
  /* ----------------------------------------- */
`;

export const PointsTag = styled(BaseTag)`
  background-color: rgba(34, 197, 94, 0.1); // Verde translúcido
  color: #4ade80; // Verde claro
  border: 1px solid rgba(34, 197, 94, 0.2); // Adicionei uma borda sutil para definição
`;

export const LevelTag = styled(BaseTag)`
  background-color: rgba(245, 158, 11, 0.1); // Laranja/Dourado translúcido
  color: #fbbf24; // Dourado claro
  border: 1px solid rgba(245, 158, 11, 0.2); // Adicionei uma borda sutil
`;