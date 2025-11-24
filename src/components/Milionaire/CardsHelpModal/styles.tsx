'use client';

import styled, { css } from 'styled-components';

// ... (Overlay, ModalContainer, CloseButton, Title, CardsGrid permanecem iguais)

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  background: linear-gradient(180deg, #004e92 0%, #000428 100%);
  border: 3px solid #0084ff;
  border-radius: 1.5rem;
  padding: 2.5rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  text-align: center;
  color: white;
  box-shadow: 0 0 30px rgba(0, 132, 255, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

   &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1); // Remove o efeito de hover
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #FFC700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(255, 199, 0, 0.5);
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

// --- ATUALIZAÇÃO AQUI ---
// Adicionamos a prop $isSelected
export const Card = styled.div<{ $isRevealed: boolean; $isSelected: boolean }>`
  aspect-ratio: 2 / 3;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease;

  // Se já foi revelada, não pode clicar mais
  ${({ $isRevealed }) => $isRevealed && css`
    pointer-events: none;
  `}

  // --- DESTAQUE PARA A CARTA SELECIONADA ---
  // Se foi revelada E é a selecionada, aplica destaque
  ${({ $isRevealed, $isSelected }) => $isRevealed && $isSelected && css`
    transform: scale(1.1); // Aumenta um pouco
    z-index: 10; // Traz para frente
    
    // Aplica um brilho dourado intenso no CardContent interno
    & > div {
      box-shadow: 0 0 30px rgba(255, 199, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.5);
      border-color: #FFD700;
    }
  `}

  // Estado normal de hover antes de revelar
  ${({ $isRevealed }) => !$isRevealed && css`
    &:hover {
      transform: translateY(-10px);
    }
  `}
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); // Efeito de virada mais "elástico"
  transform-style: preserve-3d;
  border-radius: 0.75rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);

  &.revealed {
    transform: rotateY(180deg);
  }

  /* Faces da Carta */
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    background-color: white; // Garante fundo branco na frente
  }

  /* Frente da Carta (Resultado) */
  .card-front {
    color: black;
    transform: rotateY(180deg);

    .label {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--muted-foreground);
      margin-bottom: 0.5rem;
    }
    .value {
      font-size: 4rem;
      font-weight: 800;
      color: #000428;
    }
  }

  /* Verso da Carta (Padrão) */
  .card-back {
    background: linear-gradient(135deg, #FFC700, #FF9900);
    background-image: 
      linear-gradient(135deg, #FFC700 25%, transparent 25%), 
      linear-gradient(225deg, #FFC700 25%, transparent 25%), 
      linear-gradient(45deg, #FFC700 25%, transparent 25%), 
      linear-gradient(315deg, #FFC700 25%, #FF9900 25%);
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
    border-color: #FFD700;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(180deg, #FFC700 0%, #E6A800 100%);
  color: black;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(255, 199, 0, 0.3);
  margin-top: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 199, 0, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #555;
    color: #aaa;
    box-shadow: none;
  }
`;
