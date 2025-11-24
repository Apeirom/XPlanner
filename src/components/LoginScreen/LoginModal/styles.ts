// src/components/screens/LoginScreen/LoginModal/styles.ts
'use client';

import styled, { keyframes } from 'styled-components';

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
  inset: 0;
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
  background-color: #121214;
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px; // Reduzi um pouco a largura máxima para ficar mais compacto
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${slideUp} 0.3s ease-out;

  /* Esconde a barra de rolagem */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--foreground);
  margin-left: 4px;
`;

// --- CORREÇÃO AQUI ---
// Adicionado o InputWrapper que faltava
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #18181b; // A cor de fundo agora fica no wrapper
  border: 1px solid var(--border); // A borda também
  border-radius: 0.75rem;
  padding: 0 1rem; // Padding horizontal para os ícones
  gap: 0.75rem; // Espaço entre ícone e input
  transition: border-color 0.2s;

  // Estiliza o ícone dentro do wrapper
  svg {
    color: var(--muted-foreground);
    flex-shrink: 0;
  }

  // Quando qualquer elemento dentro do wrapper recebe foco (o input),
  // o wrapper muda de cor.
  &:focus-within {
    border-color: var(--primary);
    svg {
      color: var(--primary);
    }
  }
`;

// O Input foi ajustado para ser transparente dentro do wrapper
export const Input = styled.input`
  background-color: transparent; // Fundo transparente
  border: none; // Sem borda
  padding: 0.875rem 0; // Padding apenas vertical
  font-size: 1rem;
  color: var(--foreground);
  outline: none;
  flex: 1; // Ocupa o espaço restante
  width: 100%;

  &::placeholder {
    color: var(--muted-foreground);
    opacity: 0.5;
  }
`;
// ---------------------

export const ForgotPasswordLink = styled.a`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  text-decoration: none;
  align-self: flex-end; // Alinha à direita
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: black;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    opacity: 0.95;
    box-shadow: 0 10px 15px -3px rgba(255, 199, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PrototypeNotice = styled.p`
  font-size: 0.8rem;
  color: var(--muted-foreground);
  text-align: center;
  line-height: 1.4;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px dashed var(--border);

  strong {
    color: var(--primary);
    display: block;
    margin-bottom: 0.25rem;
  }
`;