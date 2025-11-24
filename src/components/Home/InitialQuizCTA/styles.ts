// src/components/Home/InitialQuizCTA/styles.ts
'use client';

import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { opacity: 0.5; }
`;

export const Container = styled.div`
  position: relative;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  overflow: hidden;
  box-shadow: 0 4px 20px -5px rgba(255, 199, 0, 0.15);
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -20%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 199, 0, 0.2) 0%, rgba(0,0,0,0) 70%);
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulse} 3s ease-in-out infinite;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IconBox = styled.div`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.2), rgba(255, 199, 0, 0.1));
  border: 1px solid rgba(255, 199, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .main-icon {
    width: 2rem;
    height: 2rem;
    color: var(--primary);
  }

  .sparkle-icon {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    color: #ffffff;
    filter: drop-shadow(0 0 5px var(--primary));
  }
`;

// Novo container para o conteúdo à direita do ícone
export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// Novo wrapper para alinhar Título e Botão
export const HeaderActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem; // Aumentei um pouco para combinar com a referência
  font-weight: 700;
  color: var(--foreground);
  line-height: 1.2;
`;

export const ActionSection = styled.div`
  flex-shrink: 0;
  padding-top: 1rem;
  a {
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Mudamos de 'button' para 'a' para ser um link estilizado
export const StartButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  /* Gradiente XP */
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: #000000;
  
  /* REMOVE O SUBLINHADO */
  text-decoration: none;
  
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(255, 153, 0, 0.3);
  white-space: nowrap;

  .arrow-icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 153, 0, 0.4);
    
    .arrow-icon {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--muted-foreground);
  line-height: 1.6;
  max-width: 80%; // Limita a largura para não ficar muito extenso

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;