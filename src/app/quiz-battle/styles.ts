'use client';

import styled, { keyframes } from 'styled-components';

// Animação sutil de flutuação para o ícone
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Layout padrão de grid com sidebar
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  min-height: 100vh;
  background-color: var(--background);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Área de conteúdo centralizada com fundo escuro
export const ContentArea = styled.main`
  background-color: #09090b; // zinc-950
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  background: linear-gradient(to bottom right, rgba(24, 24, 27, 0.8), rgba(9, 9, 11, 0.9));
  border: 1px solid #27272a; // zinc-800
  border-radius: 2rem;
  padding: 4rem 2rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
`;

// Brilho de fundo roxo/azul
export const BackgroundGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -20%;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;

export const HeroSection = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2.5rem;
  animation: ${float} 4s ease-in-out infinite;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  // Gradiente Roxo para Rosa/Ciano similar à referência do QuizBattle
  background: linear-gradient(to bottom right, #a855f7, #3b82f6);
  border-radius: 1.5rem;
  color: white;
  box-shadow: 0 10px 30px -10px rgba(168, 85, 247, 0.6);
  z-index: 1;
  position: relative;
`;

export const IconSparkle = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    color: #fbbf24; // Amber
    filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.8));
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(168, 85, 247, 0.15); // Purple translucent
  color: #c084fc; // Purple-400
  border-radius: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(168, 85, 247, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, white, #a1a1aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #e4e4e7; // zinc-200
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: #a1a1aa; // zinc-400
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 480px;
  margin: 0 auto 2rem auto; // Reduzi a margem inferior para dar espaço ao novo aviso
`;

// NOVO ESTILO: Aviso da Fase 2
export const PhaseNotice = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto 2.5rem auto;
  padding: 0.75rem 1.25rem;
  background: rgba(251, 191, 36, 0.1); // Amber low opacity
  border: 1px solid rgba(251, 191, 36, 0.3); // Amber border
  border-radius: 0.75rem;
  color: #fbbf24; // Amber text
  font-size: 0.875rem;
  font-weight: 500;
`;

// Botão amarelo padrão da aplicação
// O Link do Next.js vai envolver este botão.
export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to right, #f59e0b, #ea580c); // Amber to Orange
  color: black;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.5);
  }
`;