// src/components/Goals/CreateGoalModal/styles.ts
'use client';

import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// O fundo escuro que cobre a tela
export const Overlay = styled.div`
  position: fixed;
  inset: 0; /* top:0, right:0, bottom:0, left:0 */
  /* Aumentei a opacidade do overlay para 0.7 para um fundo mais escuro */
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: ${fadeIn} 0.2s ease-out;
`;

// O card do modal em si
export const ModalContainer = styled.div`
  /* Mudei de var(--card) para uma cor sólida escura para remover a transparência */
  background-color: #121214; // Cor escura sólida (tipo zinc-900)
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  /* Sombra mais forte para dar destaque sobre o fundo sólido */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${slideUp} 0.3s ease-out;
  /* Esconde a barra de rolagem, mas mantém funcional */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

// ... (restante do arquivo permanece igual)
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--muted-foreground);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: var(--muted);
    color: var(--foreground);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Agrupador de label + input
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Linha flexível para colocar inputs lado a lado
export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: var(--primary); /* Ícones dourados nas labels */
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  /* Ajustei a cor de fundo do input para ser ligeiramente mais clara que o modal sólido */
  background-color: #18181b; // Cor ligeiramente mais clara (tipo zinc-800)
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: var(--foreground);
  outline: none;
  transition: border-color 0.2s;
  width: 100%;

  /* Estilizando o placeholder para ficar mais sutil */
  &::placeholder {
    color: var(--muted-foreground);
    opacity: 0.5;
  }

  &:focus {
    border-color: var(--primary);
  }

  /* Estilo específico para input de data para ficar escuro */
  &[type="date"] {
    color-scheme: dark;
  }
  /* Remove setas do input number */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

export const HelperText = styled.span`
  font-size: 0.75rem;
  color: var(--muted-foreground);
`;

// --- Seletor de Emojis ---
export const EmojiGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.5rem;
  /* Ajuste de cor de fundo para o grid de emojis */
  background-color: #18181b;
  border-radius: 1rem;
  border: 1px solid var(--border);
`;

export const EmojiOption = styled.button<{ $isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid transparent;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  ${({ $isSelected }) => $isSelected && css`
    border-color: var(--primary);
    background-color: rgba(255, 199, 0, 0.15);
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 199, 0, 0.2);
  `}
`;

// --- Footer e Botões ---
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const BaseButton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  color: var(--muted-foreground);
  border: 1px solid var(--border);

  &:hover {
    background-color: var(--muted);
    color: var(--foreground);
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: var(--primary);
  color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(255, 199, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;