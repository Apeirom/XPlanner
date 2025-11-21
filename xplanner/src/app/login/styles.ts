// src/components/screens/LoginScreen/styles.ts
'use client';

import styled, { keyframes } from 'styled-components';

// Animação sutil para os elementos decorativos
const pulse = keyframes`
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
  100% { opacity: 0.4; transform: scale(1); }
`;

export const Container = styled.div`
  min-height: 100vh;
  /* Gradiente de fundo mais profundo para destacar o efeito de vidro */
  background: linear-gradient(to bottom, #0c0c0e, #121214, #000000);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  color: var(--foreground); 
`;

export const ContentWrapper = styled.div`
  z-index: 10;
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Elementos Decorativos de Fundo (Blur)
export const DecorativeBlurTop = styled.div`
  position: absolute;
  top: 5rem;
  left: 2.5rem;
  width: 10rem;
  height: 10rem;
  background-color: rgba(255, 165, 0, 0.15); 
  border-radius: 9999px;
  filter: blur(80px);
  animation: ${pulse} 8s infinite ease-in-out;
  pointer-events: none;
`;

export const DecorativeBlurBottom = styled.div`
  position: absolute;
  bottom: 8rem;
  right: 2.5rem;
  width: 12rem;
  height: 12rem;
  background-color: rgba(139, 92, 246, 0.15); 
  border-radius: 9999px;
  filter: blur(80px);
  animation: ${pulse} 10s infinite ease-in-out reverse;
  pointer-events: none;
`;

// Seção da Marca
export const BrandSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  img {
    object-fit: contain;
    filter: drop-shadow(0 0 25px rgba(242, 201, 76, 0.5)); 
  }
`;

export const Tagline = styled.p`
  color: var(--muted-foreground); 
  font-size: var(--text-lg);
  padding: 0 1rem;
  font-weight: var(--font-weight-medium);
`;

// Grid de Features
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem 0;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  
  /* Efeito de vidro sutil para os cards */
  background-color: rgba(255, 255, 255, 0.03); 
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  
  /* Cores dos Ícones (Ajustadas para a imagem de referência) */
  .icon {
    width: 1.75rem;
    height: 1.75rem;
    
    /* Roxo */
    &:first-child { 
      color: #a855f7; 
      filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5)); 
    }
    /* Verde */
    &:nth-child(2) { 
      color: #22c55e; 
      filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.5)); 
    }
    /* Amarelo/Dourado */
    &:last-child { 
      color: #eab308; 
      filter: drop-shadow(0 0 10px rgba(234, 179, 8, 0.5)); 
    }
  }
  
  span {
    font-size: var(--text-sm);
    color: var(--muted-foreground);
    text-align: center;
    font-weight: var(--font-weight-medium);
  }
`;

// Seção de Ações
export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BaseButton = styled.button`
  width: 100%;
  height: 3.5rem;
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Cor do texto base para os botões */
  color: white;

  &:active {
    transform: scale(0.98);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: #000000; /* Texto preto no botão laranja */
  border: none;
  box-shadow: 0 4px 14px 0 rgba(255, 153, 0, 0.3);
  
  &:hover {
    background: linear-gradient(90deg, #FFB84D 0%, #FFD633 100%);
    box-shadow: 0 6px 20px rgba(255, 153, 0, 0.4);
  }
`;

// Botão Secundário com Efeito de Vidro
export const SecondaryButton = styled(BaseButton)`
  /* Fundo translúcido branco */
  background-color: rgba(255, 255, 255, 0.05);
  /* Borda translúcida branca */
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* Efeito de blur no fundo */
  backdrop-filter: blur(10px);
  /* Texto branco explícito */
  color: white;
  
  &:hover {
    /* Fica ligeiramente mais claro no hover */
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

// Login Social
export const SocialLoginWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
`;

// Botões Sociais com o mesmo Efeito de Vidro
export const SocialButton = styled(BaseButton)`
  flex: 1;
  height: 3rem;
  border-radius: var(--radius-md);
  
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
    /* Cor do ícone segue a cor do texto (branco) */
    color: currentColor;
  }
`;

export const TermsText = styled.p`
  font-size: var(--text-xs);
  color: var(--muted-foreground);
  text-align: center;
  padding-top: 1.5rem;
  margin: 0;
  opacity: 0.8;
`;