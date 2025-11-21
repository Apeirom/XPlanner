'use client';

import styled from 'styled-components';

export const CardContainer = styled.div`
  /* Estilo de card de vidro escuro padrão do projeto */
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem; // Rounded-3xl
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  backdrop-filter: blur(10px);
`;

export const CircularProgressWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  /* Rotaciona para começar do topo */
  transform: rotate(-90deg);
`;

export const ProgressCircle = styled.circle`
  transition: stroke-dashoffset 1s ease-in-out;
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
`;

const BaseTag = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const PointsTag = styled(BaseTag)`
  background-color: rgba(34, 197, 94, 0.1); // Verde translúcido
  color: #4ade80; // Verde claro
`;

export const LevelTag = styled(BaseTag)`
  background-color: rgba(245, 158, 11, 0.1); // Laranja/Dourado translúcido
  color: #fbbf24; // Dourado claro
`;